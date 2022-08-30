const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const mongoose = require('mongoose') //MongoDB tool
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

//Middleware
app.use(cors()) //browser sickness for dev
app.use(express.json()) //so body is recogniced as json

mongoose.connect('mongodb://localhost:2701/ruhrv7sion-client-server')

//POST register
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		//const newPassword = await bcrypt.hash(req.body.password, 10) //security crypt using hash

		await User.create({
			name: req.body.name,
			email: req.body.email,
            password: req.body.password,
			//password: newPassword,
		})
		res.json({ status: 'ok' }) //if everything works
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})


//POST login
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
    })



    if (user){
        const token = jwt.sign(
            {
                name: req.body.name,
                email: req.body.email,
            }, 
                'secret123'
        )

        return res.json({ status : 'ok', user: token })
    } else {
        return res.json({ status : 'error', user: false })
    }
    
})






app.get('/hello', (req, res) => {
    res.send('hello world')
})


//start listening to requests
app.listen(1337, () => {
    console.log('Server started on port 1337')
})