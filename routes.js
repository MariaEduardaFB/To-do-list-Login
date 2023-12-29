const express = require('express')
const routes = express.Router()
const{ MongoClient} = require('mongodb')
require('dotenv').config()

routes.post('/login', (req, res) => {
    res.send('Login endpoint')
})

module.exports = routes
