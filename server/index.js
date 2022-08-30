const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const mongoose = require('mongoose') //MongoDB tool

//Middleware
app.use(cors()) //browser sickness for dev
app.use(express.json()) //so body is recogniced as json

mongoose.connect('mongodb://localhost:2701')

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({status: 'ok'})
})


app.get('/hello', (req, res) => {
    res.send('hello world')
})


//start listening to requests
app.listen(1337, () => {
    console.log('Server started on port 1337')
})