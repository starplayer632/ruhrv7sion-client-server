const Student = require('../model/Student');

const getAllstudents = async (req, res) => {
    const students = await Student.find();
    if (!students) return res.status(204).json({ 'message': 'No students found.' });
    res.json(students);
}

const createNewstudents = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required' });
    }

    try {
        const result = await Student.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
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

const deletestudents = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const employee = await Student.findOne({ _id: req.body.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No student matches ID ${req.body.id}.` });
    }
    const result = await employee.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getstudents = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Student ID required.' });

    const students = await Student.findOne({ _id: req.params.id }).exec();
    if (!students) {
        return res.status(204).json({ "message": `No student matches ID ${req.params.id}.` });
    }
    res.json(students);
}

module.exports = {
    getAllstudents,
    createNewstudents,
    updatestudents,
    deletestudents,
    getstudents
}