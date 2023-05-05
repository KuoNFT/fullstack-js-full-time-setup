const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    nickname: String,
    name: String,
    latitude: Number,
    longitude: Number,
  });
  
  const Place = mongoose.model('Place', PlaceSchema);

  module.exports = Place;
  