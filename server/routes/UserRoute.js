const express = require('express');
const router = express.Router();

const { authenticateToken } = require('../middleware/authentication');
const { getUserData } = require('../controllers/UserController');

router.post('/getData', authenticateToken, getUserData);

module.exports = router;