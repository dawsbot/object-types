/* eslint no-new-wrappers:0 */
'use strict';
module.exports = function (obj) {
  if (arguments.length !== 1) {
    throw new Error(`Expected argument length of 1, got ${arguments.length}`);
  }
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }

  // Handle null
  if (obj === null) {
    return 'null';
  }
  // Handle the rest of object types
  switch (obj.constructor) {
    case ({}.constructor):
      return 'object';
    case (''.constructor):
      return 'string';
    case (new Number().constructor):
      return 'number';
    case (new Boolean().constructor):
      return 'boolean';
    case ([].constructor):
      return 'array';
    case (new Date().constructor):
      return 'date';
    case (new RegExp().constructor):
      return 'regexp';
    default:
      throw new TypeError(`Unsupported object type`);
  }
};
