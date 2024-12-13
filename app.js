const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
