const data = {
    students: require('../models/students.json'),
    setstudents: function (data) { this.students = data }
}

const getAllstudents = (req, res) => {
    res.json(data.students);
}

const createNewstudents = (req, res) => {
    const newstudents = {
        id: data.students?.length ? data.students[data.students.length - 1].id + 1 : 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    if (!newstudents.firstname || !newstudents.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setstudents([...data.students, newstudents]);
    res.status(201).json(data.students);
}

const updatestudents = (req, res) => {
    const students = data.students.find(emp => emp.id === parseInt(req.body.id));
    if (!students) {
        return res.status(400).json({ "message": `students ID ${req.body.id} not found` });
    }
    if (req.body.firstname) students.firstname = req.body.firstname;
    if (req.body.lastname) students.lastname = req.body.lastname;
    const filteredArray = data.students.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, students];
    data.setstudents(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.students);
}

const deletestudents = (req, res) => {
    const students = data.students.find(emp => emp.id === parseInt(req.body.id));
    if (!students) {
        return res.status(400).json({ "message": `students ID ${req.body.id} not found` });
    }
    const filteredArray = data.students.filter(emp => emp.id !== parseInt(req.body.id));
    data.setstudents([...filteredArray]);
    res.json(data.students);
}

const getstudents = (req, res) => {
    const students = data.students.find(emp => emp.id === parseInt(req.params.id));
    if (!students) {
        return res.status(400).json({ "message": `students ID ${req.params.id} not found` });
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