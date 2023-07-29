const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "Successfully Tested" });
});
// Error handler middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};
start();
