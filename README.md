# Laravel Mix - Register Aliases

A quick Laravel Mix extension to register aliases (~,@).

## Usage

First, install the extension.

```
npm install laravel-mix-register-aliases --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
// webpack.mix.js
const mix = require('laravel-mix');

require('laravel-mix-register-aliases');

mix
    .js('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')
    .registerAliases();

// or
mix.registerAliases({ basePath : __dirname + '/resources'});
```

```diff
//resources/js/components/example.js
- import '../../lang/en.json'
- import '../utils/helpers.js'
+ import '~/lang/en.json'
+ import '~/js/helpers.js;

```