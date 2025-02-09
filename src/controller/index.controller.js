const userModel = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports.indexcontroller = (req,res) =>{
    res.render('index')
}
module.exports.userregistercontroller = async(req,res) =>{
   console.log(req.body)

   //user asyn await in the find and hash  beacuse both are asyn in nature and  other wise it give unexpected results
   let {email ,password ,username,name,age} = req.body
const user =  await userModel.findOne({email});
    if(user) return res.status(500).send("user already registerd")
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
  let user =  userModel.create({
        username,
        email,
        age,
        name,
        password:hash
    })
  const token =   jwt.sign({email,email,userid:user._id},"srcretkey")
//   console.log(token)
res.cookie('token',token)
res.send('user registerd')
    })
})
}
module.exports.userrloginrendercontroller = async(req,res) =>{

res.render('login')
 }
 module.exports.userrlogincontroller = async(req,res) =>{
    //     console.log(req.body)
     
    //     //user asyn await in the find and hash  beacuse both are asyn in nature and  other wise it give unexpected results
    //     let {email ,password ,username,name,age} = req.body
    //  const user =  await userModel.findOne({email});
    //      if(user) return res.status(500).send("user already registerd")
    //  bcrypt.genSalt(10,(err,salt)=>{
    //      bcrypt.hash(password,salt,(err,hash)=>{
    //    let user =  userModel.create({
    //          username,
    //          email,
    //          age,
    //          name,
    //          password:hash
    //      })
    //    const token =   jwt.sign({email,email,userid:user._id},"srcretkey")
    //  //   console.log(token)
    //  res.send('user registerd')
    //      })
    //  })
const {email,password } = req.body
console.log(req.body)
let user = await userModel.findOne({email})
if(!user) return res.status(500).send('somthing went wrong')
    bcrypt.compare(password,user.password,function(err,result){
if(result) {res.status(200).send("you are log in")
    const token =   jwt.sign({email,email,userid:user._id},"srcretkey")
   res.cookie("token",token)
}
    else res.redirect('/login')
})
     }

module.exports.userrlogoutcontroller = (req,res) =>{
    res.cookie('token',"")
    res.redirect('/login')
}
module.exports.userrprofilecontroller = (req,res) =>{
res.send('profile')
}


