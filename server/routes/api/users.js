const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:id').get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);
router.route('/username').get(verifyRoles(ROLES_LIST.StudentUser), usersController.getUser);
router.route('/companyuser').get(verifyRoles(ROLES_LIST.CompanyUser), usersController.getCompanyUser);
module.exports = router;