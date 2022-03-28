const https = require("https");
const express = require("express");
const Games = require("../models/gamesSchema");
const req = require("express/lib/request");
const games = require("../models/gamesSchema");
const router = express.routes;
require("dotenv/config");

// Player ID
const eumel =
    "qPjV7l9FWyjz67a9cmnhztY-HlA-emBfGHLUpXKTHCDEVrJhrMAjVQdEK5jLJmUycDQwaSPBaTaflw";

//const matchID = "EUW1_5746047285";
const getMatchID = async function () {
    let matchIDs = [];

    await new Promise(function (resolve) {
        https
            .get(
                `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${eumel}/ids?type=normal&start=0&count=20&api_key=${process.env.RIOT_API_KEY}`,
                (res) => {
                    const headerdate =
                        res.headers && res.headers.date
                            ? res.headers.date
                            : console.log("Statuscode:", res.statusCode);
                    console.log("Header:", headerdate);

                    res.on("data", (chunk) => matchIDs.push(chunk));
                    res.on("end", () => {
                        console.log("response end");
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

const matches = async function () {
    var gameDatas = [];
    for (var matchID of await getMatchID()) {
        console.log(matchID);
        for (var gameData of await response(matchID)) {
            gameDatas.push(gameData);
        }
    }
    return gameDatas;
};

//'https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_5746047285?api_key=RGAPI-0dbfaaa8-e7f3-4f1d-a705-2c88b64e996b'
const response = async function (matchID) {
    let games = [];

    await new Promise(function (resolve) {
        https
            .get(
                `https://europe.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.RIOT_API_KEY}`,
                (res) => {
                    let data = [];
                    const headerdate =
                        res.headers && res.headers.date
                            ? res.headers.date
                            : console.log("Statuscode:", res.statusCode);
                    console.log("Header:", headerdate);

                    res.on("data", (chunk) => data.push(chunk));
                    res.on("end", () => {
                        console.log("response end");
                        games.push(JSON.parse(Buffer.concat(data).toString()));
                        resolve();
                        //Debug
                        //console.log(games);
                        /*  for (var game of games){
                    for (var participant of game.info.participants){
                        console.log(participant.challenges.damagePerMinute);
                    }
                } */
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
