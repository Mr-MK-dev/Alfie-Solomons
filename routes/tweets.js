const tweetController = require('./../controller/tweetController')
const express = require('express')
const Router = express.Router()


// Router
//     .route('/home')
//     .get(tweetController.getTweets)
// Router
//     .route('/:username/status/:id')
//     .get(tweetController.getTweet)
//     .delete(tweetController.deleteTweet)
// Router
//     .route('/:username')
//     .get(tweetController.getTweets)
//     .post(tweetController.postTweet)
//     .patch(tweetController.patchTweet)
    
// //TO delete after
Router
    .route('/')
    .get(tweetController.getTweets)
    .post(tweetController.postTweet)
Router
    .route('/:id')
    .get(tweetController.getTweet)
    .patch(tweetController.patchTweet)
    .delete(tweetController.deleteTweet)
module.exports = Router


