const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory for views
app.set('views', './views');

// Middleware for parsing JSON requests
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
