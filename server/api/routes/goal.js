const Goal = require('../../models/goal')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/goal/how/', function (req, res) {
        const howId = req.get('howId')
        console.log(howId)
    
        const qry = {
          relatedItemId: howId,
          relatedItemType: "how"
        }
    
        Goal.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding goal',
              error: err
            }))
      })
    router.get('/goal/what/', function (req, res) {
        const whatId = req.get('whatId')
        console.log(whatId)

        const qry = {
            relatedItemId: whatId,
            relatedItemType: "what"
        }

        Goal.find(qry)
            .exec()
            .then(docs => res.status(200)
            .json(docs))
            .catch(err => res.status(500)
            .json({
                message: 'Error finding goal',
                error: err
            }))
    })
    
    router.post('/goal', function (req, res) {
        let goal = new Goal(req.body)
        goal.save(function (err, goal) {
            if (err) return console.log(err)
            res.status(200).json(goal)
        })
    })
    router.get('/goal/:id', function (req, res) {
      Goal.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding goal',
            error: err
          }))
    })
    router.put('/goal/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
            relatedItemId: req.body.relatedItemId,
            relatedItemType: req.body.relatedItemType,
            expectedOutcome: req.body.expectedOutcome,
            actualOutcome: req.body.actualOutcome,
            createdOn: req.body.createdOn,
            expectedCompletionDate: req.body.expectedCompletionDate,
            actualCompletionDate: req.body.actualCompletionDate
        }
        Goal.update(qry, doc, function (err, respRaw) {
          if (err) return console.log(err)
          res.status(200).json(respRaw)
        })
      })
}
