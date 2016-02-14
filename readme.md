# object-types [![Build Status](https://travis-ci.org/dawsonbotsford/object-types.svg?branch=master)](https://travis-ci.org/dawsonbotsford/object-types) [![npm version](https://badge.fury.io/js/object-types.svg)](https://badge.fury.io/js/object-types)

> Get Javascript Object types


<br>

## Install

```
npm install --save object-types
```


<br>

## Usage

```js
const objectTypes = require('object-types');

typeof [];
//=> 'object'
objectTypes([]);
//=> 'array'


typeof new Object(true);
//=> 'object'
objectTypes(new Object(true));
//=> 'boolean'


typeof {};
//=> 'object'
objectTypes({});
//=> 'object'
```

<br>

## The Problem
JavaScript objects can be of various object types. As an example, a string can be a string or a string can be an object string:

```js
typeof 'example string';
//=> string

typeof new Object('example string');
//=> object
```

<br>

It seems like you can treat literal strings the same as object strings:

```js
const myArray = ['a string', new Object('my string object')];

myArray.map(elem => {
  return elem.toUpperCase()
});
//=> ['A STRING', 'MY STRING OBJECT']
```

<br>

But not always. **Equality operators do not behave the same**.

```js
const myArray = ['a string', new Object('my string object')];

typeof myArray[0] === myArray[1]
//=> false
```

<br>

With object-types, you can stop getting `object` for all of your `typeof` calls.

```js
const myArray = [1,2,3];
const obj = new Object([1,2,3]);

typeof myArray === typeof obj;
//=> false

typeof myArray === objectTypes(obj);
//=> true
```



<br>

## API

### objectTypes(obj)

##### obj

Type: `object`

Returns the typeof object as a string:
* 'object'
* 'string'
* 'number'
* 'boolean'
* 'array'
* 'date'
* 'regexp'
*  throws `TypeError` if unknown object type is inputted

<br>

## Related

* [deep-blue-string](https://github.com/dawsonbotsford/deep-blue-string)

<br>

## License

MIT © [dawsonbotsford](http://dawsonbotsford.com)
