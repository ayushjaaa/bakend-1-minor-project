const express = require('express')
const routes = express.Router()
const controller = require('../controller/index.controller')
routes.get('/',controller.indexcontroller)
module.exports = routes