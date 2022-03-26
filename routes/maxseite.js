const express = require('express');

const router = express.Router();


//Basic Route
router.get('/' , (req, res) => {
    res.send("Hey ich bin auf meiner Seite hier kommen die Ekko Stats hin");
});


router.post('/' , (req, res) => {
    //Show Database data
    console.log(req.body);
});

module.exports = router;


