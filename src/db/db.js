const mongosse  = require('mongoose')
const connect = () =>{
    mongosse.connect(process.env.MONGO_URL).then(()=>{
        console.log('coonected to db')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = connect