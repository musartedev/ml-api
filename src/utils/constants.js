exports.errorsObj = {
  INTERNAL_ERROR: {
    httpCode: 400,
    message: 'Ha ocurrido un error interno, intenta más tarde.',
  },
  NOT_FOUND: {
    httpCode: 404,
    message: 'El recurso no existe o no tienes privilegios para acceder.',
  },
  MISSING_REQUIRED_FIELDS: {
    httpCode: 400,
    message: 'Faltan campos que son obligatorios.',
  },
  METHOD_NOT_ALLOWED: {
    httpCode: 405,
    message: 'Método no soportado.',
  },
};

// Errors Names
exports.errors = {
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  MISSING_REQUIRED_FIELDS: 'MISSING_REQUIRED_FIELDS',
  METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
  MELI_REQUEST_ERROR: 'MELI_REQUEST_ERROR',
};

exports.defaultError = {
  httpCode: 500,
  description: 'Ha ocurrido un error inesperado, intente mas tarde.',
};
