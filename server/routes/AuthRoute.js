const express = require('express');

const router = express.Router();

const { googleLogin } = require('../controllers/AuthController');

router.post('/google', googleLogin);

module.exports = router;
