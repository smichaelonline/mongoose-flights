import mongoose from "mongoose";

const Schema = mongoose.Schema 

const flightSchema = new Schema ({
  airline: String, 
  airport: String, 
  flightNo: Number,
  date: Date, 
})

const flight = mongoose.model('Flight', flightSchema)

export {
  Flight 
}