const mongoose = require("mongoose");
const tweet = require('./tweets')
const user = require('./user.js')



const likeSchema = new mongoose.Schema(
{
usertId:{
type : mongoose.Schema.ObjectId,
ref:'user'
},
tweetId :{
    type: mongoose.Schema.ObjectId,
    ref:'tweet'
}
}
)


const Likes = mongoose.model('Likes',likeSchema)
module.exports = Likes