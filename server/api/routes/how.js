const How = require('../../models/how')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/how/why/', function (req, res) {
        const whyId = req.get('whyId')
        console.log(whyId)
    
        const qry = {
          whyId: whyId
        }
    
        How.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding why for user',
              error: err
            }))
      })
    
    router.post('/how', function (req, res) {
        let how = new How(req.body)
        how.save(function (err, how) {
            if (err) return console.log(err)
            res.status(200).json(how)
        })
    })
    router.get('/how/:id', function (req, res) {
      How.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding how',
            error: err
          }))
    })
    router.put('/how/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
          whyId: req.body.whyId,
          statement: req.body.statement,
          createdOn: req.body.createdOn
        }
        How.update(qry, doc, function (err, respRaw) {
          if (err) return console.log(err)
          res.status(200).json(respRaw)
        })
      })
}
