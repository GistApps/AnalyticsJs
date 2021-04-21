/**
 * JS-Seed Vanilla-JS button module
 * @module button
 */

if (typeof(GIST) == 'undefined') {
  GIST = {};
}

if (typeof(GIST.analytics) == 'undefined') {
  GIST.analytics = {};
}

if (typeof(GIST.analytics.client) != 'undefined') {
  console.warn("Gist analytics is already loaded");
  return;
}

GIST.analytics.client = {
  params: {
    production_url: 'http://analytics.gist-apps.com',
    sandbox_url: 'https://localhost:8000',
    path: '/api/public/events.json',
    api_key
  },
  configure: function(apiKey, sandbox) {

    GIST.analytics.client.params.api_key = api_key;

    GIST.analytics.client.params.sandbox = sandbox;

  },
  url: function() {

    if (GIST.analytics.client.params.sandbox === true) {
      return `${GIST.analytics.client.params.sandbox_url}${GIST.analytics.client.params.path}?api_key=${GIST.analytics.client.params.api_key}`
    } else {
      return `${GIST.analytics.client.params.production_url}${GIST.analytics.client.params.path}?api_key=${GIST.analytics.client.params.api_key}`
    }


  },
  send: async function(query) {

    const url      = GIST.analytics.client.url();

    const params   = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    };

    return await fetch(url, params)
    .then(res => res.json())
    .then(res => console.log(res))
    ;

      
  }

}

/** Define module API */
module.exports = GIST.analytics.client;
