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
        res.status(400).send(error.message)
    }
}

router.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
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
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }else{
        res.json({ status: "error", error: "ERROR" })
    }
        
    
    
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' }) //delauft would be 5 min
}


module.exports = router;