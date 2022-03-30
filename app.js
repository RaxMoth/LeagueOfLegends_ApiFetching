const express = require("express");
const mongoose = require("mongoose");
const app = express();
const gamesdata = require("./data/gamesdata");
const gamesSchema = require("./models/gamesSchema");
const challengesSchema = require("./models/schemas/participantsSchemas/challengesSchema");
const participantsSchema = require("./models/schemas/participantsSchemas/participantsSchema");
require("dotenv/config");

//import routes
const eumelRoute = require("./routes/eumelseite");
const maxRoute = require("./routes/maxseite");

app.use("/eumelseite", eumelRoute);
app.use("/maxseite", maxRoute);

//Routes

app.get("/", (req, res, next) => {
    console.log("Home Seite");
    //next();
});
/*
app.get("/", (req, res) => {});
*/
//Save in DB
app.post("/", async (req, res) => {
    try {
        var gameData = await gamesdata();

        for (var data of gameData) {
            var participantsIDs = [];
            for (var participants of data.info.participants) {
                participants.challenges = (
                    await challengesSchema.create(participants.challenges)
                )._id;
                participantsIDs.push(
                    (await participantsSchema.create(participants))._id
                );
            }
            data.info.participants = participantsIDs;
            await gamesSchema.create(data);
        }
        res.status(200).json({ success: true });
        console.log("Saved in DB");
    } catch (err) {
        throw err;
    }

    /*const gamesschema = new gamesSchema({
        games: req.body.games,
    });
    
    games.save()
    .then(data => {
        res.json(data);
    });*/
});

app.listen(8000);

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("Connected to DB")
);
