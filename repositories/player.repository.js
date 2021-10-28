const R6API = require('r6api.js').default;
const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
const r6api = new R6API({ email, password });

const repository = {};

repository.getPlayerByID(id) = () => {
    const { 0: player } = await r6api.findById("all", id);
    if (!player) return 'Player not found';
    return player;

};
repository.getPlayerByName(platform,username) = () => {
    const { 0: player } = await r6api.findById(platform, username);
    if (!player) return 'Player not found';
    return player;
};

module.exports = repository;