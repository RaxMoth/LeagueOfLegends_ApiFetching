const express = require("express");
const mongoose = require("mongoose");
const app = express();
const gamesdata = require("./data/gamesdata");
const gamesSchema = require("./models/gamesSchema");
require("dotenv/config");

//import routes
const eumelRoute = require("./routes/eumelseite");
const maxRoute = require("./routes/maxseite");

app.use("/eumelseite", eumelRoute);
app.use("/maxseite", maxRoute);

//Routes
app.get("/", (req, res) => {
    console.log("Home Seite");
});

//Save in DB
app.post("/", async (req, res) => {
    console.log("Saved in DB");
    var gameData = await gamesdata();

    for (var data of gameData) {
        await gamesSchema.create(data);
    }

    res.status(200).json({ success: true });
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
mongoose.connect(process.env.DB_CONNECTION, () => console.log("MaxRoth"));
