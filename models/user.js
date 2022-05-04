const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please tell us your name!']
          },
    email:{
        type: String,
        required: [true, 'Enter your Eamil'],
        unique:[true,'This email used before'],
        lowercase:true
    },
    photo : String,
    password:{
        type:String,
        required:[true,' provide a password'],
        minlength:8
    },
    role:{
        type:String,
        enum:['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'

    }
}
)

const Users = mongoose.model('Users',userSchema)
module.exports= Users