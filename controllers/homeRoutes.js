const express = require ('express');
const { append } = require('express/lib/response');
const router = express.Router();

router.get ('/', (req,res) => {
    res.send("You are at homepage.");
})

module.exports = router;