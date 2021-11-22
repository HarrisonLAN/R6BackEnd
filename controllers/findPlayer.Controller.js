const repository = require('../repositories/player.repository');
const controller = {};

controller.findPlayerByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { 0: player } = await repository.getPlayerByID(id);
        if (!player) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, player });
    } catch (err) {
        next(err);
    }
};

controller.findPlayerByName = async (req, res, next) => {
    try {
        const { username } = req.params;
        const { platform } = req.body;
        const { 0: player } = await repository.getPlayerByName(platform, username);
        if (!player) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, player });
    } catch (err) {
        next(err);
    }
};

controller.getPlayerDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { platform } = req.body;
        const { 0: player } = await repository.getRanks(id, platform);
        if (!player) {
            return res.status(400).json({ sucess: false });

        }
        res.status(200).json({ success: true, player });
    } catch (err) {
        next(err);
    }
};

module.exports = controller;