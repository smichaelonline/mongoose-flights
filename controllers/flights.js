import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js";

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
  .populate('meals')
  .then(flight => {
    Meal.find({_id: {$nin: flight.meals}})
    .then(meals => {
      res.render('flights/show',{
        title: 'Flight Details', 
        flight: flight, 
        meals: meals, 
      })
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

function createTicket(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addMeal(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
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
  createTicket,
  addMeal, 
}
  