const Joi = require('joi')
const {InputValidationError} = require('../../utils/errors')
const {VALIDATIONS} = require('../../config')

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @description Validate get conversion parameters.
 */
function validateGetConversion(req, res, next) {
  const schema = {
    query: {
      currencyFrom: Joi.string().valid(VALIDATIONS.CURRENCY_CODES).required(),
      currencyTo: Joi.string().valid(VALIDATIONS.CURRENCY_CODES).required(),
      value: Joi.number().required()
    }
  }
  const {error} = Joi.validate({query: req.query}, schema)

  if (error) return next(new InputValidationError(error.details[0].message))
  return next()
}

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @description Validate get conversion rates parameters.
 */
function validateGetConversionRates(req, res, next) {
  const schema = {
    query: {
      currencyFrom: Joi.string().valid(VALIDATIONS.CURRENCY_CODES).required()
    }
  }
  const {error} = Joi.validate({query: req.query}, schema)

  if (error) return next(new InputValidationError(error.details[0].message))
  return next()
}


module.exports = {
  validateGetConversion,
  validateGetConversionRates
}
