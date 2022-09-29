const CompanyCard = require('../model/Companycard');

const getAllCompanycards = async (req, res) => {
    const cards = await CompanyCard.find();
    if (!cards) return res.status(204).json({ 'message': 'No cards found' });
    res.json(cards);
}

const deleteCompanycard = async (req, res) => {
    if (!req?.body?.companyuser) return res.status(400).json({ "message": 'companyuser required' });
    const card = await CompanyCard.findOne({ "companyuser": req.params.companyuser }).exec();
    if (!card) {
        return res.status(204).json({ 'message': `companyuser ${req.body.companyuser} not found` });
    }
    const result = await card.deleteOne({ "companyuser": req.params.companyuser }); //or CompanyCard.deleteOne?
    res.json(result);
}

const getExist = async (req, res) => {
    if (!req?.params?.exist) return res.status(400).json({ "message": 'companyuser required' });
    const companyuser = req?.params?.exist;
    const card = await CompanyCard.findOne({ companyuser }).exec();
    if (!card) {
        return res.status(204).json({ 'message': `exist= companyuser ${req.params.companyuser} not found` });
    }
    res.json({"exist":"true"});
}

const getCompanycard = async (req, res) => {
    if (!req?.params?.companyuser) return res.status(400).json({ "message": 'companyuser required' });
    const card = await CompanyCard.findOne({ "companyuser": req.params.companyuser }).exec();
    if (!card) {
        return res.status(204).json({ 'message': `companyuser ${req.params.companyuser} not found` });
    }
    res.json(card);
}

const createCompanyCard = async (req, res) => {
    if (!req?.body?.companyuser || !req?.body?.companyname || !req?.body?.adress || !req?.body?.size || !req?.body?.products || !req?.body?.branch || !req?.body?.visionstatement || !req?.body?.infotext ) { //if (!req?.body?.questions || !req?.body?.funnelname || !req?.body?.companyuser) {
        return res.status(400).json({ 'message': 'everything is required' });
    }

    try {
        const result = await CompanyCard.create({
            companyuser: req.body.companyuser,
            companyname: req.body.companyname,
            adress: req.body.adress,
            size: req.body.size,
            products: req.body.products,
            branch: req.body.branch,
            visionstatement: req.body.visionstatement,
            infotext: req.body.infotext
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllCompanycards,
    deleteCompanycard,
    createCompanyCard,
    getCompanycard,
    getExist
}