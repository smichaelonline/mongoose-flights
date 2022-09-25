import { Flight } from "../models/flight.js"

function newFlight(req,res){
  res.render('movies/new', {
    title: 'Add Flight',
  })
}

export {
  newFlight as new 
}