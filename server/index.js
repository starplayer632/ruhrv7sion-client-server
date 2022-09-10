const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not needed in production
const corsOptions = require('./config/corsOptions.js'); //cors Config file
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});
const jwt = require('jsonwebtoken')
const pool = require('./helpers/database');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || '1337';


function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if (token == null) return res.sendStatus(401)
  
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	  console.log(err)
	  if (err) return res.sendStatus(403).json({"status":"error"})
	  req.user = user
	  next()
	})
}

/** 
 * Middleware
*/
app.use(cors(corsOptions));// Cross Origin Resource Sharing
app.use(express.json()) //so body is recogniced as json
app.use(express.urlencoded({extended:false})); // built-in middleware to handle urlencoded form data
app.use(cookieParser());//middleware for cookies
/**
 * Routes
 */

const user_studentsRouter= require("./routes/user_student");
app.use('/api/users/', user_studentsRouter);

app.use('/refresh', require('./routes/refresh'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/logout', require('./routes/logout'));

//MongoDB not needed now
//const mongoDBRouter= require("./routes/mongodb_routes");
//app.use('/api/mongodb/', mongoDBRouter);

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
 * 
 * app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});
 * 
 * 
 */



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

//SHOULD BE LAST CAUSE VERIFY
app.use(verifyJWT) //from here everthing uses this middleware
app.use('/students', require('./routes/api/students')); 



//start listening to requests
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})

