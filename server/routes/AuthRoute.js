const express = require('express');
const router = express.Router();

router.post('/google', (req, res) => {
  console.log(req);
})

module.exports = router;