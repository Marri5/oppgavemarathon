const Greeting = require('../models/Greeting');

exports.renderMongoWorld = async (req, res) => {
    try {
        const greetings = await Greeting.find({}, 'message'); // Fetch only 'message'
        res.render('mongo', { greetings });
    } catch (error) {
        console.error('Error fetching greetings:', error.message);
        res.render('mongo', { greetings: [] });
    }
};
