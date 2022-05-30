const express = require("express");
const mongoose = require("mongoose");

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
            {
                assists: {
                    type: "Number",
                },
                challenges: {
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
            },
        ],
        teams: [
            {
                objectives: {
                    champion: {
                        kills: {
                            type: "Number",
                        },
                    },
                },
                teamId: {
                    type: "Number",
                },
                win: {
                    type: "Boolean",
                },
            },
        ],
    },
});

module.exports = mongoose.model("GameSchema", GameSchema);
