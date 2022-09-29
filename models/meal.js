import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema 

const mealSchema = new Schema({
  name: {
    type: String, 
    requred: true, 
  }
}, {
  timestamps:true 
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}