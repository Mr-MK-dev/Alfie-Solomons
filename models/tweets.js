const mongoose = require("mongoose");
const user = require('./user')




const tweetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true
    },
    contact: {
      type: String,
      trim: true
    },
    images: [String],
    createdAt: {
      type: Date,
      default: new Date(),
      select: false
    },
    tweetAt: {
      type: Date,
      default: new Date(),
    },
    UserId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user'
    }
  }, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
)

tweetSchema.virtual('halfRate').get(function () {
  return this.ratingsQuantity / 2;
}
)

const Tweets = mongoose.model('Tweets', tweetSchema)

module.exports = Tweets