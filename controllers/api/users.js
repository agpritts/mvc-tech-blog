const router = require('express').Router();
const { User } = require('../../models/User.js');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log("user get req successful");
});

router.get('/login', (req, res) => {
    console.log("login get req successful");
    res.render('login');
})

module.exports = router;