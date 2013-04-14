/**
 * Module dependencies.
 */

var Palette = require('palette');

/**
 * Expose `RandomColor`.
 */

module.exports = function() {
  keys = Object.keys(Palette)
  return Palette[keys[Math.floor(keys.length * Math.random())]];
}