var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
require('dotenv').config
const API_KEY = process.env.API_KEY

//API key : c1622db6b519427ab52a5edc7997811d
router.get('/articles', async(req, res)=> {
    const url = 'https://newsapi.org/v2/everything';
    const source = 'the-verge';

    const response = await fetch(`${url}?apiKey=${API_KEY}&sources=${source}`)
    const data = await response.json();
    res.status(200).json({articles: data.articles})

});



module.exports = router;
