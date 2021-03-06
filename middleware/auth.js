const expressJwt = require('express-jwt');
const config = require('../config/config');
exports.isAuth = (req, res, next) => {
  console.log(req.profile);
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: 'Access denied',
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  console.log(req.profile);
  if (req.profile.role !== 0) {
    return res.status(403).json({
      error: 'Admin resourse! Access denied',
    });
  }

  next();
};

exports.requireSignin = expressJwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  userProperty: 'auth',
});
