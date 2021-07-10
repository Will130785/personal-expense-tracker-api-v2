const configApp = require('./app-config')
const startApp = require('./app-start')

module.exports = async (app) => {
  // Configure app
  await configApp(app)
  // Start app
  await startApp(app)
}
