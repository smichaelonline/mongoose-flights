import mongoose from "mongoose";

const Schema = mongoose.Schema 

const flightSchema = new Schema ({
  airline: {
    type:String,
  }, 
  airport: { 
    type: String,
    default: "DEN", 
  }, 
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  depart: {
    type: Date, 
    },
  }, {
    timestamps: true,
  })

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight 
}