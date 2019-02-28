const Task = require('../../models/task')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/task/what/', function (req, res) {
        const whatId = req.get('whatId')
        console.log(whatId)
    
        const qry = {
          whatId: whatId
        }
    
        Task.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding why for user',
              error: err
            }))
      })
    
    router.post('/task', function (req, res) {
        let task = new Task(req.body)
        task.save(function (err, task) {
            if (err) return console.log(err)
            res.status(200).json(task)
        })
    })
    router.get('/task/:id', function (req, res) {
      Task.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding task',
            error: err
          }))
    })
    router.put('/task/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
          whatId: req.body.whatId,
          statement: req.body.statement,
          createdOn: req.body.createdOn,
          taskDate: req.body.taskDate
        }
        Task.update(qry, doc, function (err, respRaw) {
          if (err) return console.log(err)
          res.status(200).json(respRaw)
        })
      })
}
