const express = require("express");
const mongoose = require("mongoose");

const participantsSchema = require("./schemas/participantsSchemas/participantsSchema");

const GameSchema = mongoose.Schema({
    metadata: {
        matchId: {
            type: "String",
        },
        participants: {
            type: ["String"],
        },
    },
    info: {
        gameId: {
            type: "Number",
        },
        gameMode: {
            type: "String",
        },
        participants: [
            { type: mongoose.Schema.Types.ObjectId, ref: "ParticipantsSchema" },
        ],
    },
});

module.exports = mongoose.model("GameSchema", GameSchema);
