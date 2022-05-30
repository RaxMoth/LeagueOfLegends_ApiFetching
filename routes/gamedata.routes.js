const express = require('express');
const router = express.Router();
const { grabDataForPlayer } = require('../controllers/gamedata.controller');

//Basic Route to save data to the DB
router.route('/:playerID').post(grabDataForPlayer);

module.exports = router;
