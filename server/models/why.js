const mongoose = require('mongoose')
const Schema = mongoose.Schema

let whySchema = new Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    statement: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
})

const Why = mongoose.model('Why', whySchema)

module.exports = Why