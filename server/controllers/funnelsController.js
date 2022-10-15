const FunnelConfig = require('../model/FunnelConfig');
const User = require('../model/User');
const FunnelDone = require('../model/FunnelDone');
var moment = require('moment-timezone');


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


const deletefunnelconfig = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;

    if(companyuser===req?.body?.companyuser){
        try {
            const oldFunnel = await FunnelConfig.findOneAndUpdate({"_id": req.body._id});
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

const postFunnelDone = async (req, res) => {
    if (!req?.body?.answers || !req?.body?.funnelname || !req?.body?.companyuser || !req?.body?.email || !req?.body?.name || !req?.body?.funnelid || !req?.body?.questions) {
        return res.status(400).json({ 'message': 'answers, funnelname and companyuser are required' });
    }
    try {
        const result = await FunnelDone.create({
            funnelname: req.body.funnelname,
            companyuser: req.body.companyuser,
            funnelid: req.body.funnelid,
            answers: req.body.answers,
            questions: req.body.questions,
            email: req.body.email,
            name: req.body.name
        });
        res.status(201).json({"status":"ok"});
    } catch (err) {
        console.error(err);
    }    
}

const getFunnelActive = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'valid funnel id required' });
    }
    try {
        const funnel = await FunnelConfig.findOne({"_id": req.params.id});
        if(funnel.active===true){
            res.status(201).json({"status":"active"});
        }else{
            res.status(201).json({"status":"offline"});
        }
    } catch (err) {
        console.error(err);
    }    
}




module.exports = {
    createfunnelconfig,
    deletefunnelconfig,
    getFunnelById,
    getAllfunnelconfigsByCompanyuser,
    updatefunnelconfig,
    postFunnelDone,
    getFunnelActive
}
