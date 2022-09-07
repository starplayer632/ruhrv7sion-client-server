const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});
const jwt = require('jsonwebtoken')
const pool = require('./helpers/database');

const PORT = process.env.PORT || '1337';


function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if (token == null) return res.sendStatus(401)
  
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	  console.log(err)
	  if (err) return res.sendStatus(403)
	  req.user = user
	  next()
	})
}

/** 
 * Middleware
*/
app.use(cors()) //browser sickness for dev
app.use(express.json()) //so body is recogniced as json
app.use(express.urlencoded({extended:false})); //no extations

/**
 * Routes
 */
const user_studentsRouter= require("./routes/user_student");
app.use('/api/users/', user_studentsRouter);

const mongoDBRouter= require("./routes/mongodb_routes");
app.use('/api/mongodb/', mongoDBRouter);

const jwtauth= require("./routes/jwtauth");
app.use('/api/jwtauth/', jwtauth);

app.get('/quote', authenticateToken, (req, res) => {
	res.json(posts.filter(post => post.username === req.user.studentemail))
})

//Test Hello World
app.get('/hello', (req, res) => {
    res.send('hello world')
})

/**
 * Testing
 */

 const posts = [
	{
	  username: 'test123@test.com',
	  title: 'My test quote for test123'
	},
	{
	  username: 'Jim',
	  title: 'Post 2'
	}
]

app.get('/getID', authenticateToken, async (req, res) => {
	let rows
	try {
        const sqlQuery = 'SELECT studentid FROM user_students WHERE studentemail=?';
        rows = await pool.query(sqlQuery, req.user.studentemail);
        //res.status(200).json(rows);
    } catch (error) {
        //res.status(400).send(error.message)
    }

	res.json(rows)
})

//start listening to requests
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})

