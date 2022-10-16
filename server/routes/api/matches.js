const express = require('express');
const router = express.Router();
const matchesController = require('../../controllers/matchesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    .get(verifyRoles(ROLES_LIST.CompanyUser), matchesController.getAllMatches);
router.route('/newest')
    .get(verifyRoles(ROLES_LIST.CompanyUser), matchesController.getNewestMatchTotal);
router.route('/students/:id')
    .get(verifyRoles(ROLES_LIST.StudentUser), matchesController.getAllMatchesByStudent);
module.exports = router;

