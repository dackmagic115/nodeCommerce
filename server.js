const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'));

app.get('/', (req, res) => {
  res.send('Welcome to API!!!');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
