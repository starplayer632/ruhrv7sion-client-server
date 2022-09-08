const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});

const express = require('express')
const bcrypt = require('bcrypt');
const app = express()
const jwt = require('jsonwebtoken')
const pool = require('./helpers/database');

app.use(express.json())

let refreshTokens = [] //every new  start tokens will be deleted
//need database in production system

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/login', async (req, res) => {
  // Authenticate User
  let isValid
  try {
    const {email,password} = req.body;

    const sqlGetUser = 'SELECT password FROM user_students WHERE studentid=?';
    const rows = await pool.query(sqlGetUser,email);
    if(rows){
        
        isValid = await bcrypt.compare(password,rows[0].password)
        //res.status(200).json({valid_password: isValid});
    }
    //res.status(200).send('user_students with studentid was not found'); //APP CRASHES HERE
    
    } catch (error) {
        res.status(400).send(error.message)
    }

    //Token here
    if (isValid==true){
        const email = req.body.email
        const user = { name: email }

        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }
  
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

app.listen(4000)