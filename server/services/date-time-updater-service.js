const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(cors()); 

// API endpoint
app.get('/api/message', (req, res) => {
  console.log("GET request received!");
  const currentTime = new Date().toLocaleString(); // current time as a formatted string
  res.json({ message: `Current time is: ${currentTime}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




