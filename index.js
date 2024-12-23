const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

app.use(morgan('dev'));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example POST route
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
