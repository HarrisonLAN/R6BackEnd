const config = require("./config.js");
const express = require('express');
const cors = require('cors');
const R6API = require('r6api.js').default;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
get();


async function get(){
    const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
    const r6api = new R6API({ email, password });
    const username = 'robbieh59';
    const platform = 'uplay';
    const { 0: player } = await r6api.findByUsername(platform, username);
    if (!player) return 'Player not found';

    const { 0: stats } = await r6api.getStats(platform, player.id);
    if (!stats) return 'Stats not found';
    const { pvp: { general } } = stats;
    console.log( `${player.username} has played ${general.matches} matches.`);

}