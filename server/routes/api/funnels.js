const express = require('express');
const router = express.Router();
const funnelsController = require('../../controllers/funnelsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/')
    //.get(funnelsController.getAllfunnelconfigs)// just for one route
    //.get(funnelsController.getFunnelById)
    .post(funnelsController.createfunnelconfig) //missing ROLES
    //.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.CompanyUser), funnelsController.updatefunnelconfig)
    .delete(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.CompanyUser),funnelsController.deletefunnelconfig);

router.route('/:id')
    .get(funnelsController.getFunnelById);
    //.post(funnelsController.setFunnelById);
router.route('/getallfunnelconfigs')
    .post(funnelsController.getAllfunnelconfigs);

module.exports = router;