const express = require('express');
const router = express.Router();
const companycardsController = require('../../controllers/companycardsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(companycardsController.getAllCompanycards)// just for one route
    .post(companycardsController.createCompanyCard); //missing ROLES
router.route('/:companyuser')
    .get(companycardsController.getCompanycard)
    .delete(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.CompanyUser), companycardsController.deleteCompanycard);
router.route('/exist/:exist').get(companycardsController.getExist);

module.exports = router;