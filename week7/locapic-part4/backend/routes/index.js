const express = require('express');
const router = express.Router();
const Place = require('../models/places');

router.post('/places', async (req, res) => {
  const { nickname, name, latitude, longitude } = req.body;

  try {
    const newPlace = new Place({ nickname, name, latitude, longitude });
    await newPlace.save();

    res.json({ result: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: false });
  }
});

router.get('/places/:nickname', async (req, res) => {
  const { nickname } = req.params;

  try {
    const places = await Place.find({ nickname });
    res.json({ result: true, places });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: false });
  }
});

router.delete('/places', async (req, res) => {
  const { nickname, name } = req.body;

  try {
    await Place.deleteOne({ nickname, name });
    res.json({ result: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: false });
  }
});

module.exports = router;
