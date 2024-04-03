const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

//we need to handle oauth Login from google, server will recieve 

app.get('*', (req, res) => {
  console.log(req.params);
  res.send('Hello world');
});

app.get('/login', (req, res) => {
  res.redirect()
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
