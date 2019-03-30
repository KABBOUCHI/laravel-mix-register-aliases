
const mix = require('laravel-mix');

const rootPath = Mix.paths.root.bind(Mix.paths);

mix.extend('registerAliases', function (webpackConfig, config = {}) {
    webpackConfig.resolve.alias['~'] = config.basePath || rootPath('resources/');
});