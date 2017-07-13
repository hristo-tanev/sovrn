let mongoose = require('mongoose')

const Schema = mongoose.Schema

let numeralSchema = new Schema({
  type: String,
  input_value: String,
  converted_value: String
})

const Numeral = mongoose.model('Numeral', numeralSchema)

module.exports = Numeral
