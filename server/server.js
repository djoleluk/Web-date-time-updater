const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors({
  origin: 'https://allowing-secondly-jaguar.ngrok-free.app'
}));

app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.get('/api/message', (req, res) => {
  console.log('GET request received!');
  const currentTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Belgrade',
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(new Date());
  res.json({ message: `Datum i vreme: ${currentTime}` });
});

app.listen(port, () => {
  console.log(`Server running at https://0.0.0.0:${port}/`);
});

