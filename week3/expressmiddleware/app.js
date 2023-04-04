var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors');
app.use(cors());

// authorization middleware
const apiKeys = ['azerty123', 'supersecretapikey'];

function validateApiKey(req, res, next) {
    const vapiKey = req.headers['api-key'];
    if (validApiKeys.includes(vapiKey)) {
      next(); // Si la clé est valide, on passe au middleware suivant
    } else {
      res.status(403).json({result: false, message: 'Invalid API key'}); // Si la clé est invalide, on renvoie une réponse avec un statut 403 et un message d'erreur
    }
  }


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
