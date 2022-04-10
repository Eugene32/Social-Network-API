const express = require('express');
const router = express.Router();
const User = require('../../models/User')

//get all
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

});

//get one
router.get('/:id', getUser, (req, res) => {
    // res.send('Get one user');
    res.send(res.user);
});

//create one
router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        friends: req.body.friends,
    })

    try {
        const newUser = await user.save();
        // res.status(201).json(newUser);
        const users = await User.find();
        res.status(201).json(users);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});


//update one
router.patch('/:id', getUser, (req, res) => {
    
    if(req.body.name != null){

    }
    if(req.body.friends != null){
        
    }


});

//delete one
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//middleware for all routes which needs /:id
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Non-existent user' });
        }

    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
};


module.exports = router;