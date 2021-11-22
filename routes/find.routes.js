
const controller = require('../controllers/findPlayer.Controller');
const express = require('express');
const asyncHandler = require('../middlewares/err.handler')

const router = express.Router();

router.get('/name/:username', asyncHandler(controller.findPlayerByName));
router.get('/id/:id', asyncHandler(controller.findPlayerByID));
router.get('/stats/:id',asyncHandler(controller.getPlayerDetails));

module.exports = router;