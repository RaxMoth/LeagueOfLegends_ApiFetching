const express = require("express");
const router = express.Router();

const gamesSchema = require("../models/gamesSchema");
const challenges = require("../models/schemas/participantsSchemas/challengesSchema");
const participantsSchema = require("../models/schemas/participantsSchemas/participantsSchema");

//Basic Route & Get Data from DB
router.route("/dataparticipants").get(async (req, res) => {
    var name = await participantsSchema.find({
        summonerName: "AconTell",
    });
    //var challenges = await challenges.find({ gameMode: "CLASSIC" });
    res.status(200).json(name);
    //res.send("Hey ich bin auf meiner Seite hier kommen die Kennen Stats hin");
});

router.route("/gamemodes").get(async (req, res) => {
    var game = await gamesSchema.find({ gameMode: "CLASSIC" });
    res.status(200).json(game);
});

router.route("/challenges").get(async (req, res) => {
    var challengesdata = await challenges.find();
    res.status(200).json(challengesdata);
});

router.post("/", (req, res) => {
    //Show Database data
    console.log(req.body);
});

module.exports = router;
