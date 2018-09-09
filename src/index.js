const app = require('./app')
const {PORT} = require('./config')
const server = app.listen(PORT)

server.on('error', (err) => {
  console.log(err.message)
})
server.on('listening', () => {
  console.log(`\n App is started - listening on port ${PORT}`)
})

