const express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  config = require('./config/config');

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connected'));

app.use(require('./routers'));

app.get('/', (req, res) => {
  res.send('Welcome to API!!!');
});

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
