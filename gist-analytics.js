/**
 * gist-analytics.js - entrypoint for nodejs
 *
 * example:
 *
 *   var gistAnalytics = require('gist-analytics');
 *   gistAnalytics.configure(YOUR_PUBLIC_API_KEY);
 *   gistAnalytics.insert(name, value, meta = ['example_meta1' => 'example_meta1_value']);
 **/

var client = require('./src/js/client');

module.exports.configure = client.configure;

module.exports.insert = (name, value, meta) => {

  const query = {
    name: name,
    value: value,
    meta: meta
  }

  return client.send(query);

}
