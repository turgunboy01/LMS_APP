require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
