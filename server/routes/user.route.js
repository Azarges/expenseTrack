const {
  signup,
  signin,
  updateUser,
  updateAvatar,
  currentUser,
  logoutUser,
  verifyMail,
  forgotMyPassword,
  resetPassword,
  changePassword,
} = require("../controllers/user.controller");
const authentication = require("../middlewares/auth.middleware");
const { loginLimiter } = require("../middlewares/rateLimit.middleware");

const router = require("express").Router();

// POST

router.post("/", signup);
router.post("/login", loginLimiter, signin);
router.post("/forgotPassword", forgotMyPassword);
router.post("/resetPassword", resetPassword);
router.post("/changePassword", authentication, changePassword);

// UPDATE

router.put("/", authentication, updateUser);
router.put("/avatar", authentication, updateAvatar);

// GET

router.get("/currentUser", authentication, currentUser);
router.get("/verifyMail/:token", verifyMail);

// DELETE

router.delete("/deleteToken", authentication, logoutUser);

module.exports = router;

// localhost:3000/user
