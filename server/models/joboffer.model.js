const mongoose = require('mongoose')

const JobOffer = new mongoose.Schema(
	{
		jobofferid: { type: Number, required: true, unique: true },//unique id
		email: { type: String, required: true},
		title: { type: String, required: true }, 
        company: { type: String, required: true }, 
		money: { type: String, required: true },
		time: { type: String, required: true },
        city: { type: String, required: true },
        textFacts: { type: String, required: true },
        textCooperation: { type: String, required: true },
        textYourBring: { type: String, required: true },
		date: { type: String, required: true },
	},
	{ collection: 'joboffer-data' }
)

const model = mongoose.model('JobOfferData', JobOffer)

module.exports = model