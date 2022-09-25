import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/new', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
