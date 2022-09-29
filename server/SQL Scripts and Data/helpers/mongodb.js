const mongoose = require('mongoose') //MongoDB tool

mongoose.connect('mongodb://localhost:2701/ruhrv7sion-client-server', () => {
	console.log("mongodb connected")
})

