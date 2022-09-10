const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    //.get(verifyJWT, studentsController.getAllstudents)// just for one route
    .get(studentsController.getAllstudents)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),studentsController.createNewstudents)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),studentsController.updatestudents)
    .delete(studentsController.deletestudents);

router.route('/:id')
    .get(studentsController.getstudents);

module.exports = router;