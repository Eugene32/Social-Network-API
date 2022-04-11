require('dotenv').config();
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomEmail } = require('./data');

const mongoose = require('mongoose');
mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => err);

db.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await User.deleteMany({});

    // Drop existing students
    await Thought.deleteMany({});


    // Create empty array to hold the users
    const users = [];
    //  Loop 5 times -- add students to the students array
    for (let i = 0; i < 5; i++) {
        const username = getRandomName();

        const email = getRandomEmail(username);


        users.push({
            username,
            email,
        });
    }


    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    // Log out the seed data to indicate what should appear in the database
     console.table(users);

     console.info('Seeding complete! 🌱');
    process.exit(0);
});
