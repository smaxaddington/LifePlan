const express = require('express')
const app = express()
const api = require('./api') //picks up routes bundled in the api package
const morgan = require('morgan') //logs requests to api
const bodyParser = require('body-parser') //parse request bodies

app.set('port', (process.env.PORT ||8081)) //tells it which port to listen on 

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended : false}))

app.use('/api', api) 
app.use(express.static('static')) //gives access to static files

app.use(morgan('dev'))

app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

//used to get connection to mongodb through mongoose throughout the application
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/LifePlan')
const db = mongoose.connection

//set up errors and set up middleware to conosle log the errors
//once db connection is open, callback function is to have experss application start listening

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  app.listen(app.get('port'), function () {
    console.log('API Server Listening on port ' + app.get('port') + '!')
  })
})
