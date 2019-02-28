const mongoose = require('mongoose')
const Schema = mongoose.Schema

let reflectionSchema = new Schema({
    relatedItemId: mongoose.SchemaTypes.ObjectId,
    relatedItemType: {type: String, required: true},
    createdOn: {type: Date, default: Date.now},
    statement: {type: String, required: true}
})

const Reflection = mongoose.model('Reflection', reflectionSchema)

module.exports = Reflection