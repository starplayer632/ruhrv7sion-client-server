const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');

let refreshTokens = []

async function studentlogin(studentemail, password){
    try {
        const sqlGetUser = 'SELECT password FROM user_students WHERE studentemail=?';
        const rows = await pool.query(sqlGetUser,studentemail);
        if(rows){ 
            return await bcrypt.compare(password,rows[0].password)
        }  
    } catch (error) {
        //res.status(400).send(error.message)
    }
}

router.get('/isValid2', (req, res) => {
    console.log("is Valid2 started")

	const token = req.token
    console.log("token: "+token)
	if (token == null) return res.json({"status":"error"})
    
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	    console.log("Error "+err)
        console.log("inside jwt verify")
	    if (err) return res.json({"status":"error"})
	    //req.user = user
        res.json({"status":"ok", "user": user})
	})
})


router.post('/isValid', (req, res) => {
    console.log("is Valid started")
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
    console.log("token: "+token)
	if (token == null) return res.sendStatus(401).json({"status":"error"})
    
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	    console.log("Error "+err)
        console.log("inside jwt verify")
	    if (err) return res.sendStatus(403).json({"status":"error"})
	    //req.user = user
        res.json({"status":"ok", "user": user})
	})
})

router.post('/tokenvalid', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.json({ 'status': 'error' })
    if (!refreshTokens.includes(refreshToken)) return res.json({ 'status': 'error' })
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.json({ 'status': 'error' })
      //const accessToken = generateAccessToken({ studentemail: user.studentemail })
      res.json({ 'status': 'ok' })
    })
})

router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.json({ 'status': 'error' })
    if (!refreshTokens.includes(refreshToken)) return res.json({ 'status': 'error' })
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.json({ 'status': 'error' })
      const accessToken = generateAccessToken({ studentemail: user.studentemail })
      res.json({ accessToken: accessToken })
    })
})
  
router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

router.post('/login', (req, res) => {
    // Authenticate User
    const {studentemail,password} = req.body;
    if(studentlogin(studentemail, password)){
        //Token if yes
        const user = { studentemail: studentemail }

        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json({ status: 'ok', accessToken: accessToken, refreshToken: refreshToken })
    }else{
        res.json({ status: "error", error: "ERROR" })
    }
        
    
    
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' }) //delauft would be 5 min
}


module.exports = router;