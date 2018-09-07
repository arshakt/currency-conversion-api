const successHandler = require('../../../utils/success-handler')

const converterLib = require('../../../libs/currency-converter')

function getConversion(req, res, next) {
  const {currencyFrom, currencyTo, value} = req.query
  converterLib.convert({currencyFrom, currencyTo, value})
  // .then((data) => successHandler.handleGet(res, data))
  // .catch(next)
}

module.exports = {
  getConversion
}

