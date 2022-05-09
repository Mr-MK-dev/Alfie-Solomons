const mongoose = require("mongoose");
const tweet = require('./tweets')
const user = require('./user.js')


const commentSchema = new mongoose.Schema(
    {
        usertId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user'
        },
        tweetId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'tweet'
        },
        comment: {
            type: String,
            trim: true,
        },
        postAt: {
            type: Date,
            default: new Date()
        }
    }
)


const Comment = mongoose.model('commentS', commentSchema)
module.exports = Comment