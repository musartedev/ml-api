const { getItem, getItemDescription } = require('../services/meli');
const { errors } = require('../utils/constants');
const { okResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  const { id } = req.params;

  try {
    const itemInfo = await getItem(id);
    const itemDescription = await getItemDescription(id);

    return okResponse(res, 200, { ...itemInfo, description: itemDescription });
  } catch (err) {
    console.log('exports.find -> err', err);
    return errorResponse(res, errors.MELI_REQUEST_ERROR, err);
  }
};
