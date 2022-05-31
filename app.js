const express = require("express");
const mongoose = require("mongoose");
const app = express();

//import routes
const playerRoutes = require("./routes/players.routes");
const gameDataRoutes = require("./routes/gamedata.routes");

//Routes
app.use("/players", playerRoutes);
app.use("/gamesdata", gameDataRoutes);

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("Connected to DB")
);

//Start Server
app.listen(8000);
