const mongoose = require('mongoose')
const userScherma = mongoose.Schema({
    username:{
        type:String
    },
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    posts:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
})
const userModel = mongoose.model('user',userScherma)
module.exports = userModel