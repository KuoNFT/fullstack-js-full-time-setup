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
    const apiKey = req.headers['key'];
    //console.log(apiKey)
    if (apiKeys.includes(apiKey)) {
      next();
    } else {
      res.status(403).json({result: false, error: 'Invalid API key'});
    }
    
  }
  
  
  app.use(validateApiKey);
  
  app.get('/message', (req, res) => {
    res.status(200).json({result: true, message: 'Hello world!'});
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
