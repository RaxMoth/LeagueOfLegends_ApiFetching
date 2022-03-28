const express = require("express");
const gamesSchema = require("../models/gamesSchema");

const router = express.Router();

//Basic Route & Get Data from DB
router.route("/data").get(async (req, res) => {
    var games = await gamesSchema.find();
    res.status(200).json(games);
    //res.send("Hey ich bin auf meiner Seite hier kommen die Ekko Stats hin");
});

module.exports = router;
