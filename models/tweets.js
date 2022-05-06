const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    ratingsQuantity: {
      type: Number,
      default: 0,
      required:[true,'Miss ratingsQuantity']
    },

    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },{
    toJSON:{virtuals: true},
    toObject:{virtuals: true}
  }
)

tweetSchema.virtual('halfRate').get(function (){
  return this.ratingsQuantity  / 2 ;
}
)

const Tweets = mongoose.model('Tweets', tweetSchema)

module.exports = Tweets