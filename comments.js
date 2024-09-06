// Create web server
const express = require('express');
const app = express();

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the web server on port 8000
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});