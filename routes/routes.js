
// [src/routes/base.js]

const express = require('express');

const router = express.Router();

router.use('/Search', require('./find.routes.js'));

module.exports = router;
