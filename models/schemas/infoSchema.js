const express = require('express');
const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
    "info": {
        "gameId":{
          "type": "Number"
        },
        "gameMode": {
            "type": "String"
          }
        },
});