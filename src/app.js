const express = require('express')
const app = express()
const routes = require('./routes/index.routes');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
require('dotenv').config();
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/',routes)
module.exports = app