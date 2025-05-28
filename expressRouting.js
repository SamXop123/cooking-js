const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Cars home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Cars')
})
// further pages 
router.get('/car-name/:slug', (req, res) => {
  res.send(`fetch the cars page for ${req.params.slug}`)
})


module.exports = router
