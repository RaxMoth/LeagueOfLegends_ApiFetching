const express = require('express');
const mongoose = require('mongoose');

const ObjectivesSchema = mongoose.Schema({
    "objectives": { 
        "champion": {
            "kills":{
            "type": "Number"
          },
        },
    }
});