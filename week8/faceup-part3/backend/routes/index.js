var express = require('express');
var router = express.Router();

const cloudinary = require('cloudinary').v2;
const uniqid = require('uniqid');
const fs = require('fs');

router.post('/upload', async (req, res) => {
  const photoPath = `./tmp/${uniqid()}.jpg`;
  try {
    await req.files.photoFromFront.mv(photoPath);
    const resultCloudinary = await cloudinary.uploader.upload(photoPath);
    fs.unlinkSync(photoPath);
    res.json({ result: true, url: resultCloudinary.secure_url });
  } catch (error) {
    if (fs.existsSync(photoPath)) {
      fs.unlinkSync(photoPath);
    }
    res.json({ result: false, error: error.message });
  }
});

module.exports = router;
