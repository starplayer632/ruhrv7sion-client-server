const express = require('express');
const router = express.Router();
const matchesController = require('../../controllers/matchesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    .get(verifyRoles(ROLES_LIST.CompanyUser), matchesController.getAllMatches);

module.exports = router;