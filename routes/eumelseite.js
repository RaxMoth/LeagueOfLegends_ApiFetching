const express = require('express');
const router = express.Router();


//Get Data from Database

router.get('/' , (req, res) => {
    res.send("Hey ich bin auf meiner Seite hier kommen die Kennen Stats hin");
});




router.post('/' , (req, res) => {
    //Show Database data
    console.log(req.body);
});



module.exports = router;

