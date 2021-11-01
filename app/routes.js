const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/ccs/example/home', (_, res) => {
  res.render('ccs/example/index.html')
})
