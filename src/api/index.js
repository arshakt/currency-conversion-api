const router = require('express').Router()

const conversionApi = require('./conversion')

router.use('/conversion', conversionApi)

module.exports = router
