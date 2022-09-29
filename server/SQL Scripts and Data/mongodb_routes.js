const express = require('express');
const router = express.Router();
const pool = require('./helpers/database');
const bcrypt = require('bcrypt');
const User = require('../models/user.model')
const JobOffer = require('./joboffer.model')
const jwt = require('jsonwebtoken') //Json token tool
const mongoose = require('mongoose') //MongoDB tool

//MongoDB connection
mongoose.connect('mongodb://localhost:2701/ruhrv7sion-client-server', () => {
	console.log("mongodb connected")
})

//POST register
router.post('/register', async (req, res) => {
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

router.post('/jobdatapack', async (req, res) => {
	console.log(req.body)
	try {
		res.json({ status: 'ok', ids:'1,2,5,7' }) //if everything works
	} catch (err) {
		res.json({ status: 'error', error: 'ERROR' })
	}
})

//POST login
router.post('/login', async (req, res) => {
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
router.get('/quote', async (req, res) => {	
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
router.post('/quote', async (req, res) => {
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


router.post('/newjoboffer', async (req, res) => {
	console.log(req.body)
	try {
		await JobOffer.create({
			jobofferid: req.body.jobofferid,
			email: req.body.email,
			title: req.body.title,
			company: req.body.company,
			money: req.body.money,
			time: req.body.time,
			city: req.body.city,
			textFacts: req.body.textFacts,
			textCooperation: req.body.textCooperation,
			textYourBring: req.body.textYourBring,
		})
		res.json({ status: 'ok' }) //if everything works
	} catch (err) {
		res.json({ status: 'error', error: {err} })
	}
})


async function doJobs() {
	try{
		const docs = await JobOffer.where("jobofferid")
			.gt("0")
			.select("jobofferid")
			.select("createdAt")
			.limit(100)
		console.log(docs)
		res.send("<h1>Hallo</h1>")
	} catch (e){
		console.log(e.message)
	}

}

//Test
router.get('/jobnumber', (req, res) => {
	doJobs()
	res.send("<h2>Done</h2>")
})




router.get('/jobnew', async (req, res) => {
	try{
		const docs = await JobOffer.find()
			.limit(10)
			.sort({createdAt:-1});
		console.log(docs)
		res.json(docs)
	} catch (e){
		console.log(e.message)
		res.send(e.message)
	}
})

router.post('/joboffersnew', async (req, res) => {
	console.log("/api/jobs/joboffersnew abgerufen")
	try{
		const docs = await JobOffer.find()
			.limit(10)
			.sort({createdAt:-1});
		console.log("This will be send")
		console.log(docs)
		res.json(docs)
	} catch (e){
		console.log(e.message)
		res.send(e.message)
	}
})




module.exports = router;