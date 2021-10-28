const config = require("./config.js");
const express = require('express');
const cors = require('cors');
const R6API = require('r6api.js').default;
const routes = require('./routes/routes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", routes)

const start = () => {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}.`));
};

start();