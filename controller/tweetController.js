const Tweets= require('./../models/tweets')
exports.getTweets = async (req,res)=>{
    try {
        const data = await Tweets.find()
        res.status(201).JSON(
            {
                status:true,
                data:{
                    data
                }
            }
        )
    } catch (error) {
        
    }
}
exports.getTweet =async (req,res)=>{
    try {
        const data = await Tweets.find()
        res.status(201).JSON(
            {
                status:true,
                data:{
                    data
                }
            }
        )
    } catch (error) {
        
    }
}