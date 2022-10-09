const FunnelConfig = require('../model/FunnelConfig');
const User = require('../model/User');
var moment = require('moment-timezone');

const getAllstudents = async (req, res) => {
    const students = await Student.find();
    if (!students) return res.status(204).json({ 'message': 'No students found.' });
    res.json(students);
}

const createfunnelconfig = async (req, res) => {
    if (!req?.body?.questions || !req?.body?.funnelname || !req?.body?.companyuser) { //if (!req?.body?.questions || !req?.body?.funnelname || !req?.body?.companyuser) {
        return res.status(400).json({ 'message': 'questions, funnelname and companyuser are required' });
    }

    try {
        const result = await FunnelConfig.create({
            funnelname: req.body.funnelname,
            companyuser: req.body.companyuser,
            questions: req.body.questions
        });

        res.status(201).json({"status":"ok"});
    } catch (err) {
        console.error(err);
    }
}

const updatestudents = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }
    const students = await Student.findOne({ _id: req.body.id }).exec();
    if (!students) {
        return res.status(204).json({ "message": `No student matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) students.firstname = req.body.firstname;
    if (req.body?.lastname) students.lastname = req.body.lastname;
    const result = await students.save();
    res.json(result);
}

const deletefunnelconfig = async (req, res) => {
    console.log(req.body)
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    if(companyuser===req?.body?.companyuser){
        try {
            const oldFunnel = await FunnelConfig.findOneAndRemove({"_id": req.body._id});
            res.status(201).json({"status": "deleted"});
        } catch (err) {
            console.error(err);
        }
    }else{
        res.status(400).json({ 'status': 'NO ACCESS to this funnel' });
    }
}

const getFunnelById = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Funnel ID required.' });

    const funnelconfigs = await FunnelConfig.findOne({ _id: req.params.id }).exec();
    if (!funnelconfigs) {
        return res.status(204).json({ "message": `No funnel matches ID ${req.params.id}.` });
    }
    res.json(funnelconfigs);
}

const getAllfunnelconfigsByCompanyuser = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    try {
        const funnelconfigs = await FunnelConfig.find({companyuser}).exec();
        res.json(funnelconfigs);
    } catch (err) {
        console.error(err);
    }    
}

const updatefunnelconfig = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    if(companyuser===req?.body?.companyuser){
        try {
            const oldFunnel = await FunnelConfig.findOne({"_id": req.body._id});
            oldFunnel.funnelname = req.body.funnelname;
            oldFunnel.active =  req.body.active;
            oldFunnel.questions = req.body.questions;
            //oldFunnel.companyuser = companyuser;
            oldFunnel.updatedat = moment().tz("Europe/Berlin").format();

            const funnel = await FunnelConfig.findOneAndUpdate({"_id": req.body._id}, oldFunnel);


            res.status(201).json({"status": "ok"});
        } catch (err) {
            console.error(err);
        }
    }else{
        res.status(400).json({ 'status': 'NO ACCESS to this funnel' });
    }
}

module.exports = {
    createfunnelconfig,
    deletefunnelconfig,
    getFunnelById,
    getAllfunnelconfigsByCompanyuser,
    updatefunnelconfig
}