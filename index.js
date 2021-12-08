// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// server/index.js
const path = require('path');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './recipe-front/build')));

// Handle GET requests to /home
app.get("/", (req, res) => {
  res.json({ message: "Hello from home!" });
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Handle GET requests to /api/Yay
app.get("/api/yay", (req, res) => {
  res.json({ message: "Hello from YAY It works!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './recipe-front/build', 'index.html'));
});

console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});