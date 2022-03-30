const express = require("express");
const mongoose = require("mongoose");

const challengesSchema = require("./challengesSchema");

const ParticipantsSchema = mongoose.Schema({
    assists: {
        type: "Number",
    },
    challenges: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "challengesSchema",
    },
    tripleKills: {
        type: "Number",
    },
    champExperience: {
        type: "Number",
    },
    championName: {
        type: "String",
    },
    deaths: {
        type: "Number",
    },
    doubleKills: {
        type: "Number",
    },
    goldEarned: {
        type: "Number",
    },
    individualPosition: {
        type: "String",
    },
    kills: {
        type: "Number",
    },
    neutralMinionsKilled: {
        type: "Number",
    },
    pentaKills: {
        type: "Number",
    },
    quadraKills: {
        type: "Number",
    },
    summonerId: {
        type: "String",
    },
    summonerLevel: {
        type: "Number",
    },
    summonerName: {
        type: "String",
    },
    teamId: {
        type: "Number",
    },
    teamPosition: {
        type: "String",
    },
    totalDamageDealtToChampions: {
        type: "Number",
    },
    visionScore: {
        type: "Number",
    },
    win: {
        type: "Boolean",
    },
});

module.exports = mongoose.model("ParticipantsSchema", ParticipantsSchema);
