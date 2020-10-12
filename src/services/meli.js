const fetch = require('node-fetch');
const {
  formatMeliSearchResponse,
  formatItem,
  formatItemDescription,
} = require('../utils/formatter');

const { MELI_BASE_URL, MELI_COUNTRY_PREFIX } = process.env;

/**
 * Search for items that matches with query received
 * @param {String} query
 * @param {Number} limit
 */
exports.searchItems = async (query, limit = 50) => {
  let response = await fetch(
    `${MELI_BASE_URL}/sites/${MELI_COUNTRY_PREFIX}/search?q=${query}&limit=${limit}`,
  );
  response = await response.json();

  return formatMeliSearchResponse(response);
};

/**
 * Get product info.
 * @param {String} id
 */
exports.getItem = async id => {
  let item = await fetch(`${MELI_BASE_URL}/items/${id}`);
  item = await item.json();

  let categories = await fetch(
    `${MELI_BASE_URL}/categories/${item.category_id}`,
  );
  categories = await categories.json();

  return formatItem(item, categories);
};

/**
 * Get product description
 * @param {String} id
 */
exports.getItemDescription = async id => {
  let response = await fetch(`${MELI_BASE_URL}/items/${id}/description`);
  response = await response.json();

  return formatItemDescription(response);
};
