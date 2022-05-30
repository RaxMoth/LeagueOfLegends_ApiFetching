const gamesdata = require("../data/gamesdata");
const gamesSchema = require("../models/gamesSchema");

module.exports.grabDataForPlayer = async (req, res, next) => {
    console.log("Saving in DB");
    var gameData = await gamesdata(req.params["playerID"]);

    for (var data of gameData) {
        await gamesSchema.create(data);
    }
    console.log("Saved in DB");

    res.status(200).json({ success: true });
};
