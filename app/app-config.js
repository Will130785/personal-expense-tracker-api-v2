const bodyParser = require('body-parser')
const cors = require('cors')

// Routes
const routes = require(`${global.APP_ROOT}/routes`)

module.exports = async (app) => {
  // Config body parser
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  // Apply cors
  app.use(cors())

  // Add custom header to all responses - useful for testing
  app.use(function (req, res, next) {
    res.set('Test-Header', 0)
    next()
  })

  // Init routes
  app.use('/', routes)

  return app
}
