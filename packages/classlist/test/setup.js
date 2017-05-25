const jsdom = require('jsdom');
const chai = require('chai');

// Expose Chai assertion utilities to global scope.
global.chai = chai;
global.expect = chai.expect;

// Setup JSDOM
const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.window = window;

Object.keys(global.window).forEach((key) => {
  if (!(key in global)) {
    global[key] = global.window[key];
  }
});
