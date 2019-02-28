const mongoose = require('mongoose')
const Schema = mongoose.Schema

let whatSchema = new Schema({
    howId: mongoose.SchemaTypes.ObjectId,
    statement: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
})

const What = mongoose.model('What', whatSchema)

module.exports = What