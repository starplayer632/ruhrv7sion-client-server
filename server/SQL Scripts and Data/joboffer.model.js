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
		createdAt: { type: Date, immuteable: true, default: () => Date.now(), },
	},
	{ collection: 'joboffer-data' }
)

const JobOfferData = mongoose.model('JobOfferData', JobOffer)

module.exports = JobOfferData