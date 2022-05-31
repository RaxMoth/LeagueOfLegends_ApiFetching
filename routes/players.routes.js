const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/players.controller");

//Basic Route & Get Data from DB
router.route("/").get(getData);

module.exports = router;
