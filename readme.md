# objectification [![Build Status](https://travis-ci.org/dawsonbotsford/objectification.svg?branch=master)](https://travis-ci.org/dawsonbotsford/objectification) [![npm version](https://badge.fury.io/js/objectification.svg)](https://badge.fury.io/js/objectification)

> Get Javascript Object types


<br>

## Install

```
npm install --save objectification
```


<br>

## Usage

```js
const objectification = require('objectification');

objectification('unicorns');
//=> 'unicorns & rainbows'
```


<br>

## API

### objectification(pattern, target)

##### pattern

Type: `string`

##### target

Type: `string` || `Array`

Removes all **exact occurences** of pattern in target

<br>

### objectification.secondThing(input, [options])

##### input

Type: `string`

secondThing does a specific thing to input

#### options

##### foo

Type: `boolean`
Default: `false`

Lorem ipsum.


<br>

## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
