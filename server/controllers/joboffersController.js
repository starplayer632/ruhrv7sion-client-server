const Joboffer = require('../model/Joboffer');

const getAllJoboffers = async (req, res) => {
    const jobs = await Joboffer.find();
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
    const job = await Joboffer.findOne({ "_id": ObjectId(req.params.id) }).exec();
    if (!job) {
        return res.status(204).json({ 'message': `joboffer id ${req.params.id} not found` });
    }
    res.json(job);
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
            textexpectations: req.body.textexpectations
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllJoboffers,
    createJoboffer,
    getJoboffer,
    deleteJoboffer,
    getExist
}