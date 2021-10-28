const dotenv = require('dotenv');
dotenv.config();
var config = {};

config.UBI_EMAIL = process.env.UBI_EMAIL;
config.PORT = process.env.PORT;
config.UBI_PASSWORD = process.env.UBI_PASSWORD;

module.exports = config;