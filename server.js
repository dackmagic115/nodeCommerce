const express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  config = require('./config/config'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser');

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connected'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('./routers'));

app.get('/', (req, res) => {
  res.send('Welcome to API!!!');
});

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
