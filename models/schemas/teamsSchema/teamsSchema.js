const express = require('express');
const mongoose = require('mongoose');

const MetadataSchema = mongoose.Schema({
    "teams": [
        {
            "objectives": { 
                "champion": {
                    "kills":{
                    "type": "Number"
                  },
                },
            },
            "teamId":{
                "type": "Number"
              },
            "win":{
                "type": "Boolean"
              },
        },
       
    ],
});