const router = require('express').Router()

const conversionValidationMiddleware = require('../../middlewares/validations/conversion')

const conversionService = require('./services/conversion')

router.get('/',
  conversionValidationMiddleware.validateGetConversion,
  conversionService.getConversion
)

module.exports = router
