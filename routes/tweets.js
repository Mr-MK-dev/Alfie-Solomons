const tweetController = require('./../controller/tweetController')
const express = require('express')
const Router = express.Router()


Router.route('/').get(tweetController.getTweet).post().patch().delete()




module.exports = Router


