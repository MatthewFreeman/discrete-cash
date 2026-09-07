"use strict";

(function (root, factory) {
  const catalog = factory();
  if (typeof module === "object" && module.exports) module.exports = catalog;
  if (root) root.DiscreteServiceCatalog = catalog;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  // Add approved public records only. See README.md for the catalog schema.
  return Object.freeze([]);
});
