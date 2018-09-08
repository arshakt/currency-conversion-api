const successHandler = require('../../../utils/success-handler')

const converterLib = require('../../../libs/currency-converter')

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @description Get conversion.
 */
function getConversion(req, res, next) {
  const {currencyFrom, currencyTo, value} = req.query
  converterLib.convert({currencyFrom, currencyTo, value})
    .then((data) => successHandler.handleGet(res, data))
    .catch(next)
}

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @description Get conversion rates.
 */
function getConversionRates(req, res, next) {
  const {currencyFrom} = req.query
  converterLib.getRates(currencyFrom)
    .then((data) => successHandler.handleGet(res, data))
    .catch(next)
}

module.exports = {
  getConversion,
  getConversionRates
}

