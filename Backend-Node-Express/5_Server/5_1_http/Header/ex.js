const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-My-Name', 'Dharmil');

  console.log('Headers sent to the client');
  console.log(res.getHeaders());

  // Responding with a JSON object
  res.json({ message: 'Headers received' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});