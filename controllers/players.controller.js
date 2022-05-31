const gamesSchema = require("../models/gamesSchema");

module.exports.getData = async (req, res, next) => {
    var games = await gamesSchema.find({
        $match: req.query,
    });
    res.status(200).json(games);
};
