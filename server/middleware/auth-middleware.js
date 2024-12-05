const jwt = require("jsonwebtoken");

const verifyToken = (token, secret) => {
  return jwt.verify(token, secretKey);
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "User in not authenticated",
    });
  }
  const token = authHeader.split(" ")[1];

  const payload = verifyToken(token, "JWT_SECRET");
  req.user = payload;
  next();
};

module.exports = authenticate;
