const express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
require('dotenv').config()
const API_KEY = process.env.API_KEY;


router.get('/movies', async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR`);
    const data = await response.json();
    res.status(200).json({movies : data.results});
});

module.exports = router;