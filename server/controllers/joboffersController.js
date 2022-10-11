const Joboffer = require('../model/Joboffer');
const User = require('../model/User');
var moment = require('moment-timezone');

const getAllJoboffers = async (req, res) => {
    const jobs = await Joboffer.find({ active: true });
    if (!jobs) return res.status(204).json({ 'message': 'No jobs found' });
    res.json(jobs);
}

const deleteJoboffer = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ "message": 'id required' });
    const job = await Joboffer.findOne({ "_id": ObjectId(req.body.id) }).exec();
    if (!job) {
        return res.status(204).json({ 'message': `job ${req.body.id} not found` });
    }
    const result = await job.deleteOne({"_id": ObjectId(req.body.id)}); //or CompanyCard.deleteOne?
    res.json(result);
}

const getExist = async (req, res) => {
    if (!req?.params?.exist) return res.status(400).json({ "message": 'job id required' });
    const id = req?.params?.exist;
    const job = await Joboffer.findOne({ "_id": ObjectId(id) }).exec();
    if (!job) {
        return res.status(204).json({ 'message': `exist= job id ${req.params.exist} not found` });
    }
    res.json({"exist":"true"});
}

const getJoboffer = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": ' joboffer id required' });
    const job = await Joboffer.findById(req.params.id).exec();
    if (!job) {
        return res.status(204).json({ 'message': `joboffer id ${req.params.id} not found` });
    }
    res.json(job);
}

const getJobOfferByCompanyuser = async (req, res) => {
    if (!req?.params?.companyuser) return res.status(400).json({ "message": ' companyuser is required' });
    const jobs = await Joboffer.find({ "companyuser": req.params.companyuser }).exec();
    if (!jobs) {
        return res.status(204).json({ 'message': `joboffers  for companyuser ${req.params.companyuser} not found` });
    }
    res.json(jobs);
}

const getAllJobOfferByCompanyuser = async (req, res) => {
    console.log("getAllJobOfferByCompanyuser triggerd");
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    if(companyuser===req?.body?.companyuser){
        try {
            const offers = await Joboffer.find({ companyuser : companyuser }).exec();
            res.json(offers);
        } catch (err) {
            console.error(err);
        }
    }else{
        res.status(400).json({ 'status': 'NO ACCESS to joboffers' });
    }
}


const createJoboffer = async (req, res) => {
    if (!req?.body?.companyuser || !req?.body?.companyname || !req?.body?.type || !req?.body?.title || !req?.body?.city || !req?.body?.timeweekly || !req?.body?.money || !req?.body?.textworktogether || !req?.body?.textexpectations ) { //if (!req?.body?.questions || !req?.body?.funnelname || !req?.body?.companyuser) {
        return res.status(400).json({ 'message': 'everything is required' });
    }

    try {
        const result = await Joboffer.create({
            companyuser: req.body.companyuser,
            companyname: req.body.companyname,
            type: req.body.type,
            title: req.body.title,
            city: req.body.city,
            timeweekly: req.body.timeweekly,
            money: req.body.money,
            textworktogether: req.body.textworktogether,
            textexpectations: req.body.textexpectations,
            active:  req.body.active
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//safe route
const safegetJoboffer = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;
    
    if(companyuser===cookies.username){
        try {
            if (!req?.params?.id) return res.status(400).json({ "message": ' joboffer id required' });

            const job = await Joboffer.findById(req.params.id).exec();
            if (!job) {
                return res.status(204).json({ 'message': `joboffer with id ${req.params.id} not found` });
            }
            res.json(job);
        } catch (err) {
            console.error(err);
        }
    }else{
        res.status(400).json({ 'status': 'NO ACCESS to this funnel' });
    }
    
}



//safe route
const safeupdateJobOffer = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    if(companyuser===cookies.username){
        if (!req?.params?.id) return res.status(400).json({ "message": ' joboffer id required' });
        try {
            const oldOffer = await Joboffer.findOne({"_id": req.params.id});
            if(!oldOffer){
                res.status(400).json({ "message": 'joboffer id required' })
            }else{
                
                oldOffer.title = req.body.title;
                oldOffer.active =  req.body.active;
                oldOffer.companyname = req.body.companyname;
                oldOffer.type = req.body.type;
                oldOffer.city = req.body.city;
                oldOffer.timeweekly = req.body.timeweekly;
                oldOffer.money = req.body.money;
                oldOffer.textworktogether = req.body.textworktogether;
                oldOffer.textexpectations = req.body.textexpectations;
                oldOffer.funnelstodisplay = req.body.funnelstodisplay;
                oldOffer.updatedat = moment().tz("Europe/Berlin").format();

                const joboffer = await Joboffer.findOneAndUpdate({"_id": req.body._id}, oldOffer);
                res.status(201).json({"status": "ok"});
            }

        } catch (err) {
            console.error(err);
            res.status(500).json({"status": "ERROR"});
        }
    }else{
        res.status(400).json({ 'status': 'NO ACCESS to this job offer' });
    }
}


module.exports = {
    getAllJoboffers,
    createJoboffer,
    getJoboffer,
    deleteJoboffer,
    getExist,
    getJobOfferByCompanyuser,
    getAllJobOfferByCompanyuser,
    safeupdateJobOffer,
    safegetJoboffer
}