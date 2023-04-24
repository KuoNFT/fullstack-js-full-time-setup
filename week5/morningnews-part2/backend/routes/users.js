// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ result: false, message: 'Tous les champs doivent être remplis.' });
        return;
    }


    const existingUser = await User.findOne({ username });
    if (existingUser) {
        res.status(409).json({ result: false, message: "Nom d'utilisateur déjà utilisé." });
        return;
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(200).json({ result: true }); })


    router.post('/signin', async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ result: false, message: 'Tous les champs doivent être remplis.' });
            return;
        }


        const user = await User.findOne({ username });
        if (!user) {
            res.status(404).json({ result: false, message: "Utilisateur introuvable." });
            return;
        }

        if (user.password !== password) {
            res.status(401).json({ result: false, message: "Mot de passe incorrect." });
            return;
        }

        res.status(200).json({ result: true });

    });

    module.exports = router;
