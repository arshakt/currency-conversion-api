const request = require('request-promise')
const Promise = require('bluebird')

const {CONVERTER_API_DOMAIN, DEFAULT_CURRENCY_CODES} = require('../config')

/**
 * @param {Object} payload
 * @param {string} payload.currencyFrom
 * @param {string} payload.currencyTo
 * @param {number} payload.value
 * @returns {Promise<Object>}
 * @description Convert currency.
 */
function convert(payload) {
  const {currencyFrom, currencyTo, value} = payload

  const options = {
    url: `${CONVERTER_API_DOMAIN}/convert?q=${currencyFrom}_${currencyTo}&compact=y`,
    method: 'GET'
  }

  return request(options)
    .then((data) => {
      const result = JSON.parse(data)

      return result[`${currencyFrom}_${currencyTo}`].val * value
    })
}

/**
 * @param {string} currencyFrom
 * @returns {Promise<Object>}
 * @description Get conversion rates from remote API.
 */
function getRates(currencyFrom) {

  const promiseArray = DEFAULT_CURRENCY_CODES.map((code) => {
    const options = {
      url: `${CONVERTER_API_DOMAIN}/convert?q=${currencyFrom}_${code}&compact=y`,
      method: 'GET'
    }
    return request(options)
  })

  return Promise.all(promiseArray)
    .then((results) => {
      const resultData = {}
      results.forEach((result) => {
        const data = JSON.parse(result)
        const currencyKey = Object.keys(data)[0]
        resultData[`${currencyKey.slice(-3)}`] = data[currencyKey]
      })

      return resultData
    })
}

module.exports = {
  convert,
  getRates
}
