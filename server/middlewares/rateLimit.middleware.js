const rateLimit = require("express-rate-limit");

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      status: options.statusCode,
      message: "Trop de requêtes ! Veuillez patienter.",
    });
  },
});

const loginLimiter = rateLimit({
  windowMs: 2147483647,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      status: options.statusCode,
      message: "Trop de tentatives de connexion ! Veuillez patienter.",
    });
  },
});

module.exports = { generalLimiter, loginLimiter };
