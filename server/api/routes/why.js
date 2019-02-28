const Why = require('../../models/why')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/why/user/', function (req, res) {
        const userId = req.get('userId')
        console.log(userId)
    
        const qry = {
          userId: userId
        }
    
        Why.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding why for user',
              error: err
            }))
      })
    
    router.post('/why', function (req, res) {
        let why = new Why(req.body)
        why.save(function (err, why) {
            if (err) return console.log(err)
            res.status(200).json(why)
        })
    })
    router.get('/why/:id', function (req, res) {
      Why.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding why',
            error: err
          }))
    })
    router.put('/why/:id', function (req, res) {
      let qry = { _id: req.params.id }
      let doc = {
        userId: req.body.userId,
        statement: req.body.statement,
        createdOn: req.body.createdOn
      }
      Why.update(qry, doc, function (err, respRaw) {
        if (err) return console.log(err)
        res.status(200).json(respRaw)
      })
    })
}
