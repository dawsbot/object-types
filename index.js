/* eslint no-new-wrappers:0 */
'use strict';
module.exports = function (obj) {
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }
  // TODO: enforce arg length of 1
  // Handle null
  if (obj === null) {
    return 'null';
  }

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
      return 'Date';
    default:
      return 'not found';
  }
};
