# Gist Analytics

This library is based off of js-seed - thank you! https://github.com/muicss/js-seed

Connect with Gist Analytics to write analytics data. This package can not be used to read data from the Gist Analytics API.

## Installation


 ```bash
 $ yarn add @gist/analytics
 ```

## Usage

The skeleton is configured to export a nodejs module via the `main.js` file. The file can be modified to expose other functionality. Here's an example of how to download js-seed from GitHub and use it as a nodejs module:

```javascript
> var gistAnalytics = require('@gist/analytics');
>
> gistAnalytics.configure(`YOUR_PUBLIC_API_KEY`)
> gistAnalytics.insert(name, value, meta = ['example_meta1' => 'example_meta1_value']);
>
```
