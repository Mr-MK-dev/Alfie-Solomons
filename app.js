const express = require('express')
let bodyParser = require('body-parser')
tweetRoute = require('./routes/tweets')
usersRoute = require('./routes/users')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


tweetRoute = require('./routes/tweets')

app.use('/api/v1/tweets',tweetRoute)
app.use('/api/v1/users',usersRoute)


module.exports = app