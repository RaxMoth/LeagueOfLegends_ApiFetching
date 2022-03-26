const express = require('express');
const mongoose = require('mongoose');

const MetadataSchema = mongoose.Schema({
"metadata": {
    "matchId": {
        "type": "String"
      },
      "participants": {
        "type": [
          "String"
        ]
    }
},
});