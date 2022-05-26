const mongoose = require("mongoose");
const validator = require('validator')


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Enter your name ,PAL🙌;']
        }
        ,
        email: {
            type: String,
            required: [true, 'Enter your Eamil'],
            unique: [true, 'This email used before'],
            lowercase: true,
            validate: [validator.isEmail, 'Enter a valid email']
        },
        photo: String,
        password: {
            type: String,
            required: [true, ' provide a password'],
            minlength: 8
        },
        passwordConfirm: {
            type: String,
            required: [true, 'Please confirm your '],
            validate:function(el){
                return el == this.password
            }
        }
    },
)



const Users = mongoose.model('Users', userSchema)


module.exports = Users