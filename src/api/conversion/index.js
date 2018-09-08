const router = require('express').Router()

const conversionValidationMiddleware = require('../../middlewares/validations/conversion')

const conversionService = require('./services/conversion')

router.get('/',
  conversionValidationMiddleware.validateGetConversion,
  conversionService.getConversion
)

router.get('/rates',
  conversionValidationMiddleware.validateGetConversionRates,
  conversionService.getConversionRates
)

module.exports = router
