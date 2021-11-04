const dotenv = require('dotenv');
dotenv.config();
var config = {};

config.UBI_EMAIL = process.env.UBI_EMAIL;
config.PORT = process.env.PORT;
config.UBI_PASSWORD = process.env.UBI_PASSWORD;

config.REDIS_HOST = process.env.REDIS_HOST;
config.REDIS_PORT = process.env.REDIS_PORT;
config.REDIS_PASSWORD = process.env.REDIS_PASSWORD;

module.exports = config;