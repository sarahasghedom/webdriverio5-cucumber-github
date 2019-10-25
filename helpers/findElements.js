/**
 * Returns all DOM elements based on requested selector
 *
 * @param {String} selector DOM elements
 * @return {Object} returns all objects with elements
 */

const findElements = (selector) => $$(selector);
module.exports = findElements;