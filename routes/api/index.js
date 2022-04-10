const express = require ('express');
const router = express.Router();

const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use ('/users', usersRoutes);
router.use ('/thoughts', thoughtsRoutes);

module.exports = router;

