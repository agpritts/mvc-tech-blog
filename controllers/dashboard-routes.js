const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models/User.js');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log("dashboard get req successful");
});

module.exports = router;