const mongoose = require('mongoose')

const Jobs = new mongoose.Schema(
	{
		id: { type: Number, required: true, unique: true },//unique id
		title: { type: String, required: true }, 
        company: { type: String, required: true }, 
		money: { type: String, required: true },
		time: { type: String, required: true },
        city: { type: String, required: true },
        textFacts: { type: String, required: true },
        textCooperation: { type: String, required: true },
        textYourBring: { type: String, required: true },
	},
	{ collection: 'jobs-data' }
)

const model = mongoose.model('JobsData', User)

module.exports = model