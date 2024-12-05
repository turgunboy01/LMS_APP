const user = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  const exitingUser = await user.findOne({
    $or: [{ userEmail }, { userName }],
  });

  if (exitingUser) {
    return res.status(400).json({
      success: false,
      message: "User name or user email already exits",
    });
  }
  const hashPassoword = await bcrypt.hash(password, 10);
  const newUser = new user({
    userEmail,
    userName,
    role,
    password: hashPassoword,
  });
  await newUser.save();

  return res.status(200).json({
    success: true,
    message: "User registered successfully",
  });
};

const loginUser = async (req, res) => {
  const { userEmail, password } = req.body;
  const checkUser = await user.findOne({ userEmail });
  if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
    res.status(401).json({
      success: false,
      message: "invalid credentails",
    });
  }

  const accessToken = jwt.sign(
    {
      _id: checkUser._id,
      userName: checkUser.userName,
      userEmail: checkUser.userEmail,
      role: checkUser.role,
    },
    "JWT_SECRET",
    { expiresIn: "120m" }
  );
  res.status(200).json({
    success: true,
    message: "Logged in successfully!",
    data: {
      accessToken,
      user: {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role,
      },
    },
  });
};

module.exports = { registerUser, loginUser };
