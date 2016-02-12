/* eslint no-new-wrappers:0 */
import test from 'ava';
import fn from './';

test('enforces arg length of 1', t => {
  t.throws(() => {
    fn(false);
  }, TypeError);
});

test('handles null', t => {
  t.is(fn(null), 'null');
});

test('rest of object types', t => {
  t.is(fn({}), 'object');
  t.is(fn(new String()), 'string');
  t.is(fn(new Number()), 'number');
  t.is(fn(new Boolean()), 'boolean');
  t.is(fn([]), 'array');
  t.is(fn(new Date()), 'Date');
});
