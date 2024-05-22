const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://13.48.26.177:3000' 
}));

app.get('/api/message', (req, res) => {
  console.log("GET request received!");
  const currentTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Belgrade',
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(new Date());
  res.json({ message: `Current time is: ${currentTime}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




