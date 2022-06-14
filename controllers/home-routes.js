const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models/User.js');

router.get('/', (req, res) => {
    console.log("home get req successful");
    res.render('layouts/main');
}),

module.exports = router;