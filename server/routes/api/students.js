const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    //.get(verifyJWT, studentsController.getAllstudents)// just for one route
    .get(studentsController.getAllstudents)
    .post(studentsController.createNewstudents)
    .put(studentsController.updatestudents)
    .delete(studentsController.deletestudents);

router.route('/:id')
    .get(studentsController.getstudents);

module.exports = router;