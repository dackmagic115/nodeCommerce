require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  mongoUri: process.env.DATABASE,
  jwtSecret: process.env.JWT_SECRET,
};
