const express = require('express')
const routes = express.Router()
const controller = require('../controller/index.controller')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');


function isloggedin(req,res,next){
    const token = req.cookies.token
    if (!token || token === "") {
        return res.status(401).send("You must be logged in.");
    }

    // Try to verify the token
    try {
        const data = jwt.verify(token, "srcretkey");  // Replace with your actual secret key
        req.user = data;  // Store user data from the token in the request object
        req.user = data
        next();  // Proceed to the next middleware/controller

    } catch (err) {
        return res.status(403).send("Invalid or expired token.");  // Token is invalid or expired
    }    
}
routes.get('/',controller.indexcontroller)
routes.post('/register',controller.userregistercontroller)
routes.get('/login',controller.userrloginrendercontroller)
routes.post('/login',controller.userrlogincontroller)
routes.get('/logout',controller.userrlogoutcontroller)
routes.get('/profile',
  isloggedin  ,controller.userrprofilecontroller)
module.exports = routes