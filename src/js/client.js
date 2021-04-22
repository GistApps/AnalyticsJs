/**
 * JS-Seed Vanilla-JS button module
 * @module button
 */


if (typeof(GIST) != 'object') {
 window.GIST = {};
} else {
 window.GIST = window.GIST || {};
}

if (typeof(GIST.analytics) == 'undefined') {
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
  configure: function(api_key, sandbox) {

    GIST.analytics.client.params.api_key = api_key;

    GIST.analytics.client.params.sandbox = sandbox;

  },
  url: function() {

    if (GIST.analytics.client.params.sandbox === true) {
      return `${GIST.analytics.client.params.sandbox_url}${GIST.analytics.client.params.path}`
    } else {
      return `${GIST.analytics.client.params.production_url}${GIST.analytics.client.params.path}`
    }

  },
  send: function(query) {


    const url      = GIST.analytics.client.url();

    query.api_key  = GIST.analytics.client.params.api_key;

    var request = new Request(url, {

      method: 'POST',

      headers: new Headers({
        'Content-Type': 'application/json',
      }),

      body: JSON.stringify(query)

    });

    fetch(request).then(function(response) {

      return response.json();

    }).then(function(j) {

      return (j);

    })
    .catch(error => console.log('error', error));


  }

}

/** Define module API */
module.exports = GIST.analytics.client;
