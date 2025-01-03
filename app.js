const mongoose = require('mongoose');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// MongoDB Connection
mongoose.connect('mongodb://10.12.3.252:27017', {
    useNewUrlParser: true,
    dbname: 'oppgavemarathon',
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
