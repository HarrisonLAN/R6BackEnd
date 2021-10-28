
const controller = require('../controllers/findPlayer.Controller');
const express = require('express');
const asyncHandler = require('../middlewares/err.handler')

const router = express.Router();

router.get('/name/:name', asyncHandler(controller.findPlayerByName()));
router.get('/id/:id', asyncHandler(controller.findPlayerByID()));

module.exports = router;