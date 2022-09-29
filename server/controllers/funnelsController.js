const FunnelConfig = require('../model/FunnelConfig');

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

        res.status(201).json(result);
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
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Funnel ID required.' });

    const funnelconfigs = await FunnelConfig.findOne({ _id: req.body.id }).exec();
    if (!funnelconfigs) {
        return res.status(204).json({ "message": `No funnel matches ID ${req.body.id}.` });
    }
    const result = await FunnelConfig.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getFunnelById = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Funnel ID required.' });

    const funnelconfigs = await FunnelConfig.findOne({ _id: req.params.id }).exec();
    if (!funnelconfigs) {
        return res.status(204).json({ "message": `No funnel matches ID ${req.params.id}.` });
    }
    res.json(funnelconfigs);
}

const getAllfunnelconfigs = async (req, res) => {
    if (!req?.params?.companyuser) { //if (!req?.body?.questions || !req?.body?.funnelname || !req?.body?.companyuser) {
        return res.status(400).json({ 'message': 'companyuser are required' });
    }
    const companyuser = req.params.companyuser;
    try {
        const funnelconfigs = await FunnelConfig.find({companyuser});

        res.json(funnelconfigs);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    createfunnelconfig,
    deletefunnelconfig,
    getFunnelById,
    getAllfunnelconfigs
}