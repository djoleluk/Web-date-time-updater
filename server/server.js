const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all origins

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle API routes
app.get('/api/message', (req, res) => {
    console.log("GET request received!");
    const currentTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Belgrade',
        dateStyle: 'full',
        timeStyle: 'long'
    }).format(new Date());
    res.json({ message: `Current time is: ${currentTime}` });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



