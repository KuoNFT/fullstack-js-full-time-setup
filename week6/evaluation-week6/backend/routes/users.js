var express = require('express');
var router = express.Router();

router.post('/signup', (req, res) => {
	const newUserInfos = {
		username: req.body.username,
		token: 'This is not a token', // Change this line by using uid2
	};

	res.json({ result: true, newUserInfos: newUserInfos });
});

module.exports = router;
