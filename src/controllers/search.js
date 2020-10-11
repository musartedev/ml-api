const { searchItems } = require('../services/meli');
const { errors } = require('../utils/constants');
const { okResponse, errorResponse } = require('../utils/response');

exports.find = async (req, res) => {
  const { q, limit } = req.query;

  try {
    const result = await searchItems(q, limit);
    return okResponse(res, 200, result);
  } catch (err) {
    console.log('exports.find -> err', err);
    return errorResponse(res, errors.MELI_REQUEST_ERROR, err);
  }
};
