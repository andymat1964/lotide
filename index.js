// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArray = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const chai = require('chai');
const assert = require('chai').assert;

module.exports = {
  head,
  tail,
  middle,
  eqArray,
  assertArraysEqual,
  assertEqual,
  chai,
  assert
};