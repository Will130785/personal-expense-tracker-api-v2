const router = require('express').Router()

router.get('/', (req, res, next) => {
  console.log('You hit the test route')
})

module.exports = router
