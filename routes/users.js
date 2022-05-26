const express = require('express')
const authController = require('./../controller/authController')
const Router = express.Router()

Router.post('/signup',authController.createUser)





module.exports = Router
