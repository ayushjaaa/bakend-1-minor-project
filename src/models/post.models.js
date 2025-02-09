const monngose = require('mongoose')
const postSchema = monngose.Schema({
    user:{
        type:monngose.Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String
    },
    likes:[
        {type:monngose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
})
module.exports = monngose.model('post',postSchema)