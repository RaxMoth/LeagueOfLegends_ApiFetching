const express = require("express");
const router = express.Router();

const gamesSchema = require("../models/gamesSchema");

//Basic Route & Get Data from DB
router.route("/data").get(async (req, res) => {
    var games = await gamesSchema.find(
        // Stage 1: Filter pizza order documents by pizza size
        {
            $match: { summonerNamesize: "AconTell" },
        }
    );
    res.status(200).json(games);
    //res.send("Hey ich bin auf meiner Seite hier kommen die Kennen Stats hin");
});

router.post("/", (req, res) => {
    //Show Database data
    console.log(req.body);
});

module.exports = router;
