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

controller.getDescMovieRatings = async (req, res) => {
    const movies = await repository.sortOnRating();
    res.json({ success: true, movies });
};


module.exports = controller;