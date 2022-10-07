const express = require('express');
const router = express.Router();
const joboffersController = require('../../controllers/joboffersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(joboffersController.getAllJoboffers)// just for one route
    .post(joboffersController.createJoboffer); //missing ROLES

router.route('/:id')
    .get(joboffersController.getJoboffer)
    .delete(verifyRoles(ROLES_LIST.Admin), joboffersController.deleteJoboffer);

router.route('/exist/:exist').get(joboffersController.getExist);
router.route('/user/:companyuser').post(joboffersController.getJobOfferByCompanyuser);

module.exports = router;