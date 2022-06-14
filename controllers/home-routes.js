const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models/User.js');

router.get('/', (req, res) => {
    console.log("home get req successful");
    res.render('layouts/main');
}),

router.get('/login', (req, res) => {
    console.log("login get req successful");
    res.render('login');
})

module.exports = router;