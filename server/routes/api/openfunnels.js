const express = require('express');
const router = express.Router();
const funnelsController = require('../../controllers/funnelsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
//const verifyJWT = require('../../middleware/verifyJWT'); // just for one route




router.route('/:id').get(funnelsController.getFunnelById);

module.exports = router;