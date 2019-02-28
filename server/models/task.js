const mongoose = require('mongoose')
const Schema = mongoose.Schema

let taskSchema = new Schema({
    whatId: mongoose.SchemaTypes.ObjectId,
    taskDate: {type: Date, default: Date.now},
    createdOn: {type: Date, default: Date.now},
    statement: {type: String, required: true}
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task