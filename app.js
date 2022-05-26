const express = require('express')
const bodyParser = require('body-parser')
const tweetRoute = require('./routes/tweets')
const usersRoute = require('./routes/users')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api/v1/tweets', tweetRoute)
app.use('/api/v1/users', usersRoute)


module.exports = app