const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../../controllers/auth-controller/index");
const authenticate = require("../../middleware/auth-middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/check-auth", authenticate, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
});

module.exports = router;
