# Gist Analytics

This library is based off of js-seed - thank you! https://github.com/muicss/js-seed
Connect with Gist Analytics to write analytics data. This package can not be used to read data from the Gist Analytics API.

## Installation

 ```bash
 $ yarn add gist-analytics
 ```

## Usage

Modular Javascript:

```javascript
> var gistAnalytics = require('gist-analytics');
>
> gistAnalytics.configure(`YOUR_PUBLIC_API_KEY`)
> gistAnalytics.insert(name, value, meta = ['example_meta1' => 'example_meta1_value']);
>
```

Include Directly:

```html
> <script src="/dist/js/client.min.js"></script>
>
> <script>
>
> var gistAnalytics = GIST.analytics.client;
>
> var query = {
>  name: name,
>  value: value,
>  meta: {
>    meta1: meta1val,
>    meta2: meta2val
>  }
> }
>
> gistAnalytics.configure(`YOUR_PUBLIC_API_KEY`);
>
> gistAnalytics.send(query);
>
> </script>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Deploy a new version using `np`

```bash
$ np
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
