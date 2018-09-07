const request = require('request-promise')
const { CONVERTER_API_DOMAIN } = require('../config')

function convert(payload) {
  const {currencyFrom, currencyTo, value} = payload

  const options = {
    url: `${CONVERTER_API_DOMAIN}/convert?q=${currencyFrom}_${currencyTo}&compact=y`,
    method: 'GET'
  }

  return request(options)
    .then((data)=>{
      const result = JSON.parse(data)
      return result[`${currencyFrom}_${currencyTo}`].val * value
    })
}

module.exports = {
  convert
}
