const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not needed in production
const corsOptions = require('./config/corsOptions.js'); //cors Config file
const jwt = require('jsonwebtoken')
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const PORT = process.env.PORT || '1337';

/**
 * Connect to MongoDB
 */
connectDB();

/** 
 * Middleware
*/
app.use(credentials); //Handle options credentials check - before CORS! and fetch cookies credentials requirement
app.use(cors(corsOptions));// Cross Origin Resource Sharing
app.use(express.json()) //so body is recogniced as json
app.use(express.urlencoded({extended:false})); // built-in middleware to handle urlencoded form data
app.use(cookieParser());//middleware for cookies
/**
 * Routes
 */

app.use('/logout', require('./routes/logout'));
app.use('/refresh', require('./routes/refresh'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/companycards', require('./routes/api/companycards'));
app.use('/joboffers', require('./routes/api/joboffers'));
app.use('/openfunnels/', require('./routes/api/openfunnels'));

//Test Hello World
app.get('/hello', (req, res) => {
    res.send('hello world')
})

//SHOULD BE LAST CAUSE VERIFY OPTIONS
app.use(verifyJWT) //from here everthing uses this middleware
app.use('/students', require('./routes/api/students')); 
app.use('/safe/joboffers', require('./routes/api/safejoboffers'));
app.use('/users', require('./routes/api/users'));
app.use('/funnels', require('./routes/api/funnels'));
app.use('/matches', require('./routes/api/matches'));


//start listening to requests BUT Mongoose needs to work
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
