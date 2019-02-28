const mongoose = require('mongoose')
const Schema = mongoose.Schema

let goalSchema = new Schema({
    relatedItemId: mongoose.SchemaTypes.ObjectId,
    relatedItemType: {type: String, required: true},
    expectedOutcome: {type: String, required: true},
    actualOutcome: {type: String, required: true},
    createdOn: {type: Date, default: Date.now},
    expectedCompletionDate: {type: Date, default: Date.now},
    actualCompletionDate: {type: Date, default: Date.now}
})

const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal