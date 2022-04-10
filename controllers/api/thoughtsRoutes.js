const express = require ('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('You are at thoughts routes');

});


module.exports = router;