const mongoose = require('mongoose')
const Schema = mongoose.Schema

let howSchema = new Schema({
    whyId: mongoose.SchemaTypes.ObjectId,
    statement: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
})

const How = mongoose.model('How', howSchema)

module.exports = How