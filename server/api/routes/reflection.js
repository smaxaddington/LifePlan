const Reflection = require('../../models/reflection')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/reflection/how/', function (req, res) {
        const howId = req.get('howId')
        console.log(howId)
    
        const qry = {
          relatedItemId: howId,
          relatedItemType: "how"
        }
    
        Reflection.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding ref',
              error: err
            }))
      })
    router.get('/reflection/what/', function (req, res) {
        const whatId = req.get('whatId')
        console.log(whatId)

        const qry = {
            relatedItemId: whatId,
            relatedItemType: "what"
        }

        Reflection.find(qry)
            .exec()
            .then(docs => res.status(200)
            .json(docs))
            .catch(err => res.status(500)
            .json({
                message: 'Error finding ref',
                error: err
            }))
    })
    router.get('/reflection/why/', function (req, res) {
        const whyId = req.get('whyId')
        console.log(whyId)

        const qry = {
            relatedItemId: whyId,
            relatedItemType: "why"
        }

        Reflection.find(qry)
            .exec()
            .then(docs => res.status(200)
            .json(docs))
            .catch(err => res.status(500)
            .json({
                message: 'Error finding ref',
                error: err
            }))
    })
    router.get('/reflection/goal/', function (req, res) {
        const goalId = req.get('goalId')
        console.log(goalId)

        const qry = {
            relatedItemId: goalId,
            relatedItemType: "goal"
        }

        Reflection.find(qry)
            .exec()
            .then(docs => res.status(200)
            .json(docs))
            .catch(err => res.status(500)
            .json({
                message: 'Error finding ref',
                error: err
            }))
    })
    
    router.post('/reflection', function (req, res) {
        let reflection = new Reflection(req.body)
        reflection.save(function (err, reflection) {
            if (err) return console.log(err)
            res.status(200).json(reflection)
        })
    })
    router.get('/reflection/:id', function (req, res) {
      Reflection.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding ref',
            error: err
          }))
    })
    router.put('/reflection/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
            relatedItemId: req.body.relatedItemId,
            relatedItemType: req.body.relatedItemType,
            createdOn: req.body.createdOn,
            statement: req.body.statement,
          
        }
        Reflection.update(qry, doc, function (err, respRaw) {
          if (err) return console.log(err)
          res.status(200).json(respRaw)
        })
      })
    router.delete('/reflection', function (req, res) {
      console.log('id' + req.headers.id)
        Reflection.findByIdAndRemove(req.headers.id, (err, howw) => {
          // As always, handle any potential errors:
          if (err) return res.status(500).send(err);
          // We'll create a simple object to send back with a message and the id of the document that was removed
          // You can really do this however you want, though.
          const response = {
              message: "Reflection successfully deleted",
              id: req.headers.id
          };
          console.log(response)
          return res.status(200).send(response);
      });
    })
}
