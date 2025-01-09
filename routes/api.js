const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('Invalid username or password');

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).send('Invalid username or password');

        res.send('Login successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).send('User already exists');

        const newUser = new User({ username, password });
        await newUser.save();

        res.send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

router.get('/galleri', (req, res) => {
    res.render('gallery');
});

module.exports = router;
