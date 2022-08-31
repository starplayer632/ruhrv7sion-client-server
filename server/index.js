const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const mongoose = require('mongoose') //MongoDB tool
const User = require('./models/user.model')
const jwt = require('jsonwebtoken') //Json token tool
const bcrypt = require('bcryptjs') //Hashing Algorythm secure password

//Middleware
app.use(cors()) //browser sickness for dev
app.use(express.json()) //so body is recogniced as json

mongoose.connect('mongodb://localhost:2701/ruhrv7sion-client-server')

//POST register
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10) //security crypt using hashing algo

		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' }) //if everything works
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/jobs/jobdatapack', async (req, res) => {
	console.log(req.body)
	try {
		res.json({ status: 'ok', ids:'1,2,5,7' }) //if everything works
	} catch (err) {
		res.json({ status: 'error', error: 'ERROR' })
	}
})

//POST login
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

    if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

    const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

    if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
    
})

//Get Login token
app.get('/api/quote', async (req, res) => {	
    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email})
        
        return res.json({ status : 'ok', quote: user.quote })
    }catch(err){
        console.log(err)
        res.json({status: 'error', error: 'ivalid token'})
    }
})

//Login Backend validation
app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

//Test
app.get('/hello', (req, res) => {
    res.send('hello world')
})


//start listening to requests
app.listen(1337, () => {
    console.log('Server started on port 1337')
})