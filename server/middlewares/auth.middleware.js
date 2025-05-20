const jwt = require("jsonwebtoken");
const User = require("../models/user.schema");

const authentication = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Accès interdit." });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decoded.sub);
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: "Accès non authorisé." });
  }
};

module.exports = authentication;
