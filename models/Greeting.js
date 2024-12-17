const mongoose = require('mongoose');

const greetingSchema = new mongoose.Schema({
    message: { type: String, required: true }
});

module.exports = mongoose.model('Greeting', greetingSchema);
