'use strict';

var babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream');


// ============================================================================
// HELPER METHODS
// ============================================================================

function makeTask(displayName, fn) {
  if (displayName) fn.displayName = displayName;
  return fn;
}


function clean(dirname) {
  return makeTask('clean: ' + dirname, function(done) {
    return del(dirname, done);
  });
}


function browserifyStream(pathname, opts) {
  var opts = opts || {};

  // init browserify
  var b = browserify({
    entries: [pathname],
    paths: ['./'].concat(opts.paths || []),
    extensions: [].concat(opts.extensions || [])
  });

  // apply methods
  ['external', 'transform'].forEach(function(method) {
    if (!opts[method]) return;

    [].concat(opts[method]).forEach(function(args) {
      b[method].apply(b, [].concat(args));
    });
  });

  // NOTE: run jshint here to avoid errors from buffer()
  return b
    .bundle()
    .pipe(source('tmpfile'))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default', {verbose: true}))
    .pipe(buffer());
}


// ============================================================================
// PRIVATE TASKS
// ============================================================================

function buildJs(dirname) {
  return makeTask('build-js: ' + dirname, function() {
    return browserifyStream('./build-targets/client.js')
      .pipe(plugins.babel())
      .pipe(plugins.rename('client.js'))
      .pipe(gulp.dest(dirname))
      .pipe(plugins.uglify())
      .pipe(plugins.rename('client.min.js'))
      .pipe(gulp.dest(dirname));
  });
}


function buildE2eTests() {
  return makeTask('build-e2e-tests', function() {
    return browserifyStream(
      './build-targets/e2e-tests.js',
      {
        extensions: ['.jsx'],
        transform: [babelify.configure()]
      })
      .pipe(plugins.rename('tests.js'))
      .pipe(gulp.dest('./e2e-tests'));
  });
}


// ============================================================================
// PUBLIC TASKS
// ============================================================================

gulp.task('build-examples', gulp.series(
  clean('./examples/assets/gist-analytics'),
  gulp.parallel(
    buildJs('./examples/assets/gist-analytics/js'),
  )
));


gulp.task('build-dist', gulp.series(
  clean('./dist'),
  gulp.parallel(
    buildJs('./dist/js'),
  )
));


gulp.task('build-e2e-tests', gulp.series(
  clean('./e2e-tests/tests.js'),
  buildE2eTests()
));


gulp.task('build-all', gulp.parallel(
  'build-examples',
  'build-dist',
  'build-e2e-tests'
));
