const express = require('express');
const router = express.Router();
const joboffersController = require('../../controllers/joboffersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/user')
    .put(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.safeupdateJobOffer)
    .get(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.getAllJobOfferByCompanyuser);
router.route('/user/:companyuser').get(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.getJobOfferByCompanyuser);
router.route('/offer/:id')
    .get(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.safegetJoboffer)
    .delete(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.deleteJoboffer)
    .put(verifyRoles(ROLES_LIST.CompanyUser), joboffersController.safeupdateJobOffer);




module.exports = router;