module.exports = {
  PORT: process.env.PORT || 3000,
  FIXER_API_KEY: process.env.FIXER_API_KEY,
  FIXER_API_DOMAIN: 'http://data.fixer.io/api',
  CONVERTER_API_DOMAIN: 'http://free.currencyconverterapi.com/api/v5',
  VALIDATIONS: {
    CURRENCY_CODES: [
      'USD', 'CAD', 'EUR', 'AED', 'AFN', 'ALL', 'AMD', 'ARS', 'AUD', 'AZN', 'BAM',
      'BDT', 'BGN', 'BHD', 'BIF', 'BND', 'BOB', 'BRL', 'BWP', 'BYR', 'BZD', 'CDF',
      'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
      'EEK', 'EGP', 'ERN', 'ETB', 'GBP', 'GEL', 'GHS', 'GNF', 'GTQ', 'HKD', 'HNL',
      'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY',
      'KES', 'KHR', 'KMF', 'KRW', 'KWD', 'KZT', 'LBP', 'LKR', 'LTL', 'LVL', 'LYD',
      'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MOP', 'MUR', 'MXN', 'MYR', 'MZN', 'NAD',
      'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PHP', 'PKR', 'PLN',
      'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SDG', 'SEK', 'SGD', 'SOS',
      'SYP', 'THB', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU',
      'UZS', 'VEF', 'VND', 'XAF', 'XOF', 'YER', 'ZAR', 'ZMK'
    ]
  }
}
