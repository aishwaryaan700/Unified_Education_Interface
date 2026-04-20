const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Connect MongoDB */
connectDB();

/* Routes */
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/assignments", require("./routes/assignmentRoutes"));

/* Test Route */
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});