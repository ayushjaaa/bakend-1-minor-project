const express = require('express')
const app = express()
const routes = require('./routes/index.routes')
require('dotenv').config();
app.use('/',routes)
module.exports = app