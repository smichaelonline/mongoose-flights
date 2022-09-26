import { Flight } from "../models/flight.js"

function newFlight(req,res){
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req,res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/`)
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}

function index(req,res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights, 
      title: 'All Flights'
    })
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}
export {
  newFlight as new,
  create, 
  index,
}