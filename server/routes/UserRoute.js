const express = require('express');
const router = express.Router();

const { getUserData } = require('../controllers/UserController');

router.get('/getData', getUserData);

module.exports = router;