const locale = process.env.LOCALE || 'es-AR';

/**
 * Get categories from an array of Filters
 * @param {Array} filters
 */
const getCategoriesFromFilters = (filters = []) => {
  const categoriesObj = filters.filter(filter => filter.id === 'category')[0];
  const mainCategoryObj = categoriesObj && categoriesObj.values ? categoriesObj.values[0] : {};

  return formatCategoryPath(mainCategoryObj);
};

const getPictureFromPictures = (pictures = []) => pictures[0].url;

const formatCategoryPath = categoryObj => {
  if (
    categoryObj &&
    categoryObj.path_from_root &&
    categoryObj.path_from_root.length
  ) {
    return categoryObj.path_from_root.map(category => category.name);
  }

  return [];
};

const formatPrice = (price, currencyId) => {
  return {
    currency: currencyId,
    decimals: (price % 1).toFixed(2) * 100,
    amount: parseInt(price),
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

exports.formatItem = (
  {
    id,
    title,
    price,
    currency_id,
    thumbnail,
    pictures,
    condition,
    shipping,
    sold_quantity,
    address,
  },
  category,
) => ({
  id,
  title,
  price: formatPrice(price, currency_id),
  picture:
    pictures && pictures.length ? getPictureFromPictures(pictures) : thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity,
  address: address && address.state_name,
  categories: category ? formatCategoryPath(category) : undefined,
});

exports.formatItemDescription = descriptionObj => descriptionObj.plain_text;
