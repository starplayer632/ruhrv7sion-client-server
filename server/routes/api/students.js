const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');

router.route('/')
    .get(studentsController.getAllstudents)
    .post(studentsController.createNewstudents)
    .put(studentsController.updatestudents)
    .delete(studentsController.deletestudents);

router.route('/:id')
    .get(studentsController.getstudents);

module.exports = router;