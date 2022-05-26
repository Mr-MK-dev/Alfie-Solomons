const User = require('./../models/user')

exports.createUser = async (req, res,n) => {
    try {
         newUser = await User.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                 newUser
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            data: err
        })
    }
}
