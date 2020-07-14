const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/User');

// @route   GET api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
  res.send('register')
});

module.exports = router;
