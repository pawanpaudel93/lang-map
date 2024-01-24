# lang-exts-map [![NPM version](https://badge.fury.io/js/lang-exts-map.svg)](http://badge.fury.io/js/lang-exts-map)

> Get the language associated with a file extension or the extensions associated with a language using the data from GitHub's [Linguist YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)

## Heads up! API Changes in 0.4.0

The API changed in v0.4.0. Please see the documentation below for details on the new API. Don't hesitate to create an issue if you have any questions.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i lang-exts-map --save
```

## Usage

```js
var map = require('lang-exts-map');
```

### Get language by extension

Returns the language that is associated with the given file extension (with or without `.`):

```js
var map = require('lang-exts-map');

map.languages('coffee');
//=> [ 'coffeescript' ]
map.languages('handlebars');
//=> [ 'handlebars' ]
map.languages('hbs');
//=> [ 'handlebars' ]
map.languages('javascript');
//=> [ 'javascript' ]
map.languages('js');
//=> [ 'javascript' ]
map.languages('md');
//=> [ 'markdown' ]
map.languages('mkdown');
//=> [ 'markdown' ]
```

**Why is an array of languages returned?**

In some (rare) cases an extension maps to multiple languages.

```js
map.languages('h');
//=> [ 'c', 'c++', 'objective-c' ]
```

### Get extensions by language

Returns the list of file extensions associated with the given language:

```js
var map = require('lang-exts-map');

map.extensions('coffee');
//=> [ 'coffee', '_coffee', 'cjsx', 'cson', 'iced' ]
map.extensions('hbs');
//=> [ 'handlebars', 'hbs' ]
map.extensions('markdown');
//=> [ 'md', 'markdown', 'mkd', 'mkdn', 'mkdown', 'ron' ]
map.extensions('md');
//=> [ 'md', 'markdown', 'mkd', 'mkdn', 'mkdown', 'ron' ]
map.extensions('c');
//=> [ 'c', 'cats', 'h', 'idc', 'w' ]
```

## Get the object of entensions

```js
var map = require('lang-exts-map');
var extensions = map().extensions;
```

## Get the object of languages

```js
var map = require('lang-exts-map');
var languages = map().languages;
```

## Related projects

[language-map](https://github.com/blakeembrey/language-map): GitHub's Linguist YAML language map provided as JSON

## Updating languages

Update the `.json` language files in [lib/](lib/).

```sh
$ npm run update
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/lang-exts-map/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 18, 2015._