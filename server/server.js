const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for all origins during development
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client/build')));

// API endpoint to get the current time
app.get('/api/message', (req, res) => {
    console.log("GET request received!");
    const currentTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Belgrade',
        dateStyle: 'full',
        timeStyle: 'long'
    }).format(new Date());
    res.json({ message: `Datum i vreme: ${currentTime}` });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client/build', 'index.html'));
});

// Read SSL certificate and key
const options = {
    key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem'))
};

// Start the HTTPS server
https.createServer(options, app).listen(port, '0.0.0.0', () => {
    console.log(`Server running at https://0.0.0.0:${port}/`);
});












