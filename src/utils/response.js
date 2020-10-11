const { errorsObj, defaultError } = require('./constants');

exports.okResponse = (res, httpCode, data) => {
  res.set('Access-Control-Allow-Origin', '*');
  return res.status(httpCode).json({
    // This is hardcoded because I don't want it to change.
    author: { name: 'Mariangélica', lastname: 'Useche' },
    ...data,
  });
};

exports.errorResponse = (res, id, extra) => {
  let error = errorsObj[id];
  error = error || defaultError;

  return res.status(error.httpCode).json({
    error: {
      id,
      message: error.message, // Used for information messages.
      extra, // Extra info about the error
    },
  });
};
