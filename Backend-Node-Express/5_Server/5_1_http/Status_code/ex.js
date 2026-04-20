const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  // Simulate a successful response
  res.status(200).json({ message: 'Users retrieved successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});