const What = require('../../models/what')
const mongoose = require('mongoose')

module.exports = function (router) {

    router.get('/what/how/', function (req, res) {
        const howId = req.get('howId')
        console.log(howId)
    
        const qry = {
          howId: howId
        }
    
        What.find(qry)
          .exec()
          .then(docs => res.status(200)
            .json(docs))
          .catch(err => res.status(500)
            .json({
              message: 'Error finding why for user',
              error: err
            }))
      })
    router.post('/what', function (req, res) {
        let what = new What(req.body)
        what.save(function (err, what) {
            if (err) return console.log(err)
            res.status(200).json(what)
        })
    })
    router.get('/what/:id', function (req, res) {
      What.findById(req.params.id).exec()
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding what',
            error: err
          }))
    })
    router.put('/what/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
          howId: req.body.howId,
          statement: req.body.statement,
          createdOn: req.body.createdOn
        }
        console.log(doc)
        What.update(qry, doc, function (err, respRaw) {
          if (err) return console.log(err)
          res.status(200).json(respRaw)
        })
      })
      router.delete('/what', function (req, res) {
        What.findByIdAndRemove(req.headers.id, (err, howw) => {
          if (err) return res.status(500).send(err);
          const response = {
              message: "What successfully deleted",
              id: req.headers.id
          };
          console.log(response)
          return res.status(200).send(response);
      });
    })
}
