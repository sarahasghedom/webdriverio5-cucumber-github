/**
 * Returns all DOM elements based on requested selector
 *
 * @param {String} selector DOM elements
 * @return {Object} returns an object with elements
 */

const findElement = (selector) => $(selector);
module.exports = findElement;