function handleGet(res, data) {
  const result = {
    status: 200,
    message: 'Ok',
    data
  }
  res.status(200).json(result)
}

module.exports = {
  handleGet
}
