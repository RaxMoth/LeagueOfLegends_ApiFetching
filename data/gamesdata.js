const https = require("https");
const express = require("express");
const Games = require("../models/gamesSchema");
const req = require("express/lib/request");
const games = require("../models/gamesSchema");
require("dotenv/config");

// Player ID
const testPlayerID =
    "qPjV7l9FWyjz67a9cmnhztY-HlA-emBfGHLUpXKTHCDEVrJhrMAjVQdEK5jLJmUycDQwaSPBaTaflw";

//Beispiel const matchID = "EUW1_5746047285";
const getMatchID = async function (playerID) {
    let matchIDs = [];

    await new Promise(function (resolve) {
        https
            .get(
                `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerID}/ids?type=normal&start=0&count=20&api_key=${process.env.RIOT_API_KEY}`,
                (res) => {
                    if (res.statusCode != 200) {
                        console.log("ERROR, StatusCode: ", res.statusCode);
                    }
                    res.on("data", (chunk) => matchIDs.push(chunk));
                    res.on("end", () => {
                        matchIDs = JSON.parse(
                            Buffer.concat(matchIDs).toString()
                        );
                        resolve();
                    });
                }
            )
            .on("error", (err) => {
                console.log("Error: ", err.message);
            });
    });

    return matchIDs;
};

const matches = async function (playerID) {
    var gameDatas = [];
    for (var matchID of await getMatchID(playerID)) {
        gameDatas.push(await response(matchID));
    }
    return gameDatas;
};

const response = async function (matchID) {
    let games = [];

    await new Promise(function (resolve) {
        https
            .get(
                `https://europe.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.RIOT_API_KEY}`,
                (res) => {
                    if (res.statusCode != 200) {
                        console.log("ERROR, StatusCode: ", res.statusCode);
                    }

                    res.on("data", (chunk) => games.push(chunk));
                    res.on("end", () => {
                        console.log("response end");
                        games = JSON.parse(Buffer.concat(games).toString());
                        resolve();
                    });
                }
            )
            .on("error", (err) => {
                console.log("Error: ", err.message);
            });
    });
    return games;
};

module.exports = matches;
