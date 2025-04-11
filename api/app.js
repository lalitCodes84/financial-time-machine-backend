const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("../config/db");
const financeRoutes = require("../routes/financeRoutes");
const authRoutes = require("../routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/finance", financeRoutes);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

// 👉 This block runs server only in local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
}

// ✅ Correct export for Vercel
module.exports =  serverless(app);
