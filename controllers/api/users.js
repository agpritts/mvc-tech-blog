const router = require('express').Router();
const { User } = require('../../models/User.js');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log("user get req successful");
});

module.exports = router;