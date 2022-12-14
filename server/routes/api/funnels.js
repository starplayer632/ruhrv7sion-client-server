const express = require('express');
const router = express.Router();
const funnelsController = require('../../controllers/funnelsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    .get(verifyRoles(ROLES_LIST.CompanyUser), funnelsController.getAllfunnelconfigsByCompanyuser)
    .post(verifyRoles(ROLES_LIST.CompanyUser),funnelsController.createfunnelconfig) //missing ROLES
    .put(verifyRoles(ROLES_LIST.CompanyUser), funnelsController.updatefunnelconfig)
    .delete(verifyRoles(ROLES_LIST.CompanyUser),funnelsController.deletefunnelconfig);

router.route('/:id').get(funnelsController.getFunnelById);
router.route('/getFunnelyByCompany')
    .get(verifyRoles(ROLES_LIST.CompanyUser), funnelsController.getAllfunnelconfigsByCompanyuser);
router.route('/done').post(funnelsController.postFunnelDone);
router.route('/doneWithUsername').post(funnelsController.postFunnelDoneWithUsername);



router.route('/active/:id').get(funnelsController.getFunnelActive);

module.exports = router;