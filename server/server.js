const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for your React app
app.use(cors({
    origin: 'https://web-date-time-updater.pages.dev'
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client/build')));

// API endpoint to get the current time
app.get('/api/message', (req, res) => {
  console.log('GET request received!');
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
