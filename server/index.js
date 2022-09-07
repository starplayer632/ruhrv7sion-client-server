const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || '1337';
/**
 * Testing
 */

const posts = [
	{
	  username: 'Kyle',
	  title: 'Post 1'
	},
	{
	  username: 'Jim',
	  title: 'Post 2'
	}
]

app.get('/posts', authenticateToken, (req, res) => {
	res.json(posts.filter(post => post.username === req.user.name))
})

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
app.use('/api/users/students/', user_studentsRouter);

const mongoDBRouter= require("./routes/mongodb_routes");
app.use('/api/mongodb/', mongoDBRouter);

const jwtauth= require("./routes/jwtauth");
app.use('/api/jwtauth/', jwtauth);


//Test Hello World
app.get('/hello', (req, res) => {
    res.send('hello world')
})


//start listening to requests
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})

