const R6API = require('r6api.js').default;
const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
const r6api = new R6API({ email, password });
const repository = {};
repository.getPlayerByID = (id) => {
    return r6api.findById("all", id);
};
repository.getPlayerByName = (platform, username) => {
    return r6api.findByUsername(platform, username);

};

module.exports = repository;