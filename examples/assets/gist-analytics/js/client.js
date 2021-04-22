"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    if ((typeof GIST === "undefined" ? "undefined" : _typeof(GIST)) != 'object') {
      window.GIST = {};
    } else {
      window.GIST = window.GIST || {};
    }

    if (typeof GIST.analytics == 'undefined') {
      GIST.analytics = {};
    }

    GIST.analytics.client = {
      params: {
        production_url: '//analytics.gist-apps.com',
        sandbox_url: '//localhost:8000',
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
          return "".concat(GIST.analytics.client.params.sandbox_url).concat(GIST.analytics.client.params.path);
        } else {
          return "".concat(GIST.analytics.client.params.production_url).concat(GIST.analytics.client.params.path);
        }
      },
      send: function send(query) {
        var url = GIST.analytics.client.url();
        query.api_key = GIST.analytics.client.params.api_key;
        var request = new Request(url, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(query)
        });
        fetch(request).then(function (response) {
          return response.json();
        }).then(function (j) {
          return j;
        }).catch(function (error) {
          return console.log('error', error);
        });
      }
      /** Define module API */

    };
    module.exports = GIST.analytics.client;
  }, {}]
}, {}, [1]);