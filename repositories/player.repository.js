const R6API = require('r6api.js').default;
const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
const r6api = new R6API({ email, password });
const repository = {};
repository.getPlayerByID = (id,platform) => {
    return r6api.findById(platform, id);
};
repository.getPlayerByName = (platform, username) => {
    return r6api.findByUsername(platform, username);

};
repository.getProgression = (id,platform) => {
    return r6api.getPlayerByName(platform, id);
n
};
repository.getPlaytime = (id,platform) => {
    return r6api.getPlaytime(platform,id);

};
repository.getRanks = (id,platform) => {
    return r6api.getRanks(platform, id);

};
repository.getStats = (id,platform) => {
    return r6api.getStats(platform, id);
};
module.exports = repository;