const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose');

mongoose.connect('mongodb://10.12.3.252:27017/oppgavemarathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Register routes
app.use('/', apiRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
