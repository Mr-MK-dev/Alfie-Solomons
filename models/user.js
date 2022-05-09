const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        fname: {
            String
        }, lname: { String },
        email: {
            type: String,
            required: [true, 'Enter your Eamil'],
            unique: [true, 'This email used before'],
            lowercase: true
        },
        photo: String,
        password: {
            type: String,
            required: [true, ' provide a password'],
            minlength: 8
        },
        role: {
            type: String,
            enum: ['user', 'guide', 'lead-guide', 'admin'],
            default: 'user'

        },
        username: {type: String,
        unique:[true,'This username used before'] }
        ,gender:{type:Boolean,
            enum:['Male','Female','Animel']}
    },
)

const Users = mongoose.model('Users', userSchema)
module.exports = Users