const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");
const indexController = require('../controllers/indexController');
const mongoController = require('../controllers/mongoController');
const User = require('../models/User');

router.get('/index', indexController.renderIndex);

router.get("/helloworld", helloController.proxyToNginx);

router.get('/mongo-world', mongoController.renderMongoWorld);

// Login Route
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

// Registration Route
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

module.exports = router;
