
const express = require('express')
const Router = express.Router()


Router.route('/api/v1/users').get().post().patch().delete()




module.exports = Router
