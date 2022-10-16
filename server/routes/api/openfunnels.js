const express = require('express');
const router = express.Router();
const funnelsController = require('../../controllers/funnelsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route

router.route('/done').post(funnelsController.postFunnelDone);
router.route('/doneWithUsername').post(funnelsController.postFunnelDoneWithUsername);
router.route('/active/:id').get(funnelsController.getFunnelActive);


router.route('/:id').get(funnelsController.getFunnelById);


module.exports = router;