"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    /**
     * JS-Seed Vanilla-JS main module
     * @module main
     */
    (function (win) {
      var client = require('src/js/client');
    })(window);
  }, {
    "src/js/client": 2
  }],
  2: [function (require, module, exports) {
    /**
     * JS-Seed Vanilla-JS button module
     * @module button
     */
    if (typeof GIST == 'undefined') {
      GIST = {};
    }

    if (typeof GIST.analytics == 'undefined') {
      GIST.analytics = {};
    }

    if (typeof GIST.analytics.client != 'undefined') {
      console.warn("Gist analytics is already loaded");
      return;
    }

    GIST.analytics.client = {
      params: {
        production_url: 'http://analytics.gist-apps.com',
        sandbox_url: 'https://localhost:8000',
        path: '/api/public/events.json',
        api_key: null,
        sandbox: false
      },
      configure: function configure(api_key, sandbox) {
        GIST.analytics.client.params.api_key = api_key;
        GIST.analytics.client.params.sandbox = sandbox;
      },
      url: function url() {
        if (GIST.analytics.client.params.sandbox === true) {
          return "".concat(GIST.analytics.client.params.sandbox_url).concat(GIST.analytics.client.params.path, "?api_key=").concat(GIST.analytics.client.params.api_key);
        } else {
          return "".concat(GIST.analytics.client.params.production_url).concat(GIST.analytics.client.params.path, "?api_key=").concat(GIST.analytics.client.params.api_key);
        }
      },
      send: function () {
        var _send = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(query) {
          var url, params;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  url = GIST.analytics.client.url();
                  params = {
                    method: 'post',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(query)
                  };
                  _context.next = 4;
                  return fetch(url, params).then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return console.log(res);
                  });

                case 4:
                  return _context.abrupt("return", _context.sent);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function send(_x) {
          return _send.apply(this, arguments);
        }

        return send;
      }()
      /** Define module API */

    };
    module.exports = GIST.analytics.client;
  }, {}]
}, {}, [1]);