const express = require("express");
const mongoose = require("mongoose");

const ChallengesSchema = mongoose.Schema({
    damagePerMinute: {
        type: "Number",
    },
    goldPerMinute: {
        type: "Number",
    },
    kda: {
        type: "Number",
    },
    perfectGame: {
        type: "Number",
    },
    soloKills: {
        type: "Number",
    },
    takedowns: {
        type: "Number",
    },
});

module.exports = mongoose.model("ChallengesSchema", ChallengesSchema);
