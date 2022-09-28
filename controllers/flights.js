import { Flight } from "../models/flight.js"

function newFlight(req,res){
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req,res) {
  !req.body.depart? delete req.body.depart : null;
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}

function index(req,res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights, 
      title: 'All Flights'
    })
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}

function show(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show',{
      title: 'Flight Details', 
      flight: flight, 
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteFlight(req,res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(movie => {
    res.redirect('/flights')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      flight, 
      title: 'Edit Flight'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function update(req,res){
  Flight.findByIdAndUpdate(req.params.id, req.body)
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create, 
  show,
  deleteFlight as delete, 
  edit, 
  update, 
}
  