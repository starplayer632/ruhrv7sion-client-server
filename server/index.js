const express = require('express')
const app = express()
const cors = require('cors') //Just for dev not neede in production
const PORT = process.env.PORT || '1337';
const dotenv = require('dotenv');
dotenv.config({path: '.env-local'});




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

//Test Hello World
app.get('/hello', (req, res) => {
    res.send('hello world')
})


//start listening to requests
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})

