const express = require('express')
const routes = require('./routes')
const { connectToMongoDB } = require('./dbconnects')
const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})



connectToMongoDB()
    .then(() => {
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        })
    })
    .catch(error => {
        console.error('Error connecting to MongoDB: ', error)
    })