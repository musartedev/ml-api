const fetch = require('node-fetch');
const { formatMeliSearchResponse } = require('../utils/formatter');

const MELI_BASE_URL = process.env.MELI_BASE_URL;

/**
 * Search for items that matches with query received
 * @param {String} query
 */
exports.searchItems = async query => {
  let response = await fetch(`${MELI_BASE_URL}/search?q=${query}`);
  response = await response.json();

  return formatMeliSearchResponse(response);
};
