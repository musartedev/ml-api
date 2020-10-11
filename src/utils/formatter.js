/**
 * Get categories from an array of Filters
 * @param {Array} filters
 */
const getCategoriesFromFilters = (filters = []) => {
  const categoriesObj = filters.filter(filter => filter.id === 'category')[0];

  if (categoriesObj && categoriesObj.values) {
    return categoriesObj.values.map(category => category.name);
  }

  return [];
};

const formatPrice = (price, currencyId) => {
  return {
    currency: currencyId,
    amount: price,
    decimals: price.toFixed(2),
  };
};

/**
 * Format Meli Search Response
 * @param {Array} filters
 */
exports.formatMeliSearchResponse = (response = {}) => ({
  categories: getCategoriesFromFilters(response.filters),
  items: this.formatItems(response.results),
});

/**
 * Format Meli Item
 * @param {Array} items
 */
exports.formatItems = (items = []) => items.map(item => this.formatItem(item));

exports.formatItem = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping,
  sold_quantity
}) => ({
  id,
  title,
  price: formatPrice(price, currency_id),
  picture: thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity
});

exports.formatItemDescription = (descriptionObj) => (descriptionObj.plain_text);
