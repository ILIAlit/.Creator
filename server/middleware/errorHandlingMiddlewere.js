const ApiError = require('../error/ApiError');

module.exports = function(error, req, res, next) {
  console.log(error);
  if(error instanceof ApiError) {
    return res.status(error.status).json({message: error.message, errors: error.errors});
  } else {
    return res.status(500).json({message: "Непредвиденная ошибка"});
  }
}