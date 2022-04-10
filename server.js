require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;
const routes = require('./routes');

mongoose.connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to database'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log("Server is running...."));