const Tweets = require('./../models/tweets')
const APIfeatures = require('./../utils/tweetManage')

exports.getTweets = async (req, res) => {
    try {
        reqQuery = { ...req.query }
        const data = Tweets.find(reqQuery)

        let ele = new APIfeatures(data, reqQuery)
        ele.sortFun().filterFun()
        console.log(reqQuery)

        let tweets = await data
        res.status(201).json(
            {
                status: 'success',
                tweetsNo: tweets.length,
                data: {
                    tweets
                }
            }
        )
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            massage: {error:error}
        })
    }
}
exports.getTweet = async (req, res) => {
    try {
        const data = Tweets.findById(req.params.id)

        tweets = await data
        res.status(201).json(
            {
                status: 'success',
                data: {
                    tweets
                }
            }
        )
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            massage: error
        })
    }
}
//DONE
exports.postTweet = async (req, res) => {
    try {
        tweets = await Tweets.create(req.body)
        res.status(201).json(
            {
                status: 'success',
                data: {
                    tweets
                }
            }
        )
    }
    catch (error) {
        res.status(401).json({
            status: 'success',
            massage: error
        })
    }
}


exports.patchTweet = async (req, res) => {
    try {
        tweets = await Tweets.findOneAndUpdate(req.params.id, req.body)
        res.status(201).json(
            {
                status: 'success',
                data: {
                    tweets
                }
            }
        )
    }
    catch (error) {
        res.status(401).json({
            status: 'success',
            massage: error
        })
    }

}


exports.deleteTweet = async (req, res) => {
    try {
        tweets = await Tweets.findByIdAndDelete(req.params.id)
        res.status(201).json(
            {
                status: 'success',
                data: 'Delete done'
            }
        )
    }
    catch (error) {
        res.status(401).json({
            status: 'fail',
            massage: error
        })
    }

}