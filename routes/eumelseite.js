const express = require("express");
const router = express.Router();

const gamesSchema = require("../models/gamesSchema");
const participantsSchema = require("../models/schemas/participantsSchemas/participantsSchema");

//Basic Route & Get Data from DB
router.route("/data").get(async (req, res) => {
    var name = await participantsSchema.find({ summonerName: "AconTell" });
    var game = await gamesSchema.find({ gameMode: "CLASSIC" });
    res.status(200).json(name);
    //res.send("Hey ich bin auf meiner Seite hier kommen die Kennen Stats hin");
});

router.post("/", (req, res) => {
    //Show Database data
    console.log(req.body);
});

module.exports = router;
