const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/visualization', (req, res) => {
    res.send('Welcome to the Visualization Page');
});

app.get('/trading-strategy', (req, res) => {
    res.send('Welcome to the Trading Strategy Page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
