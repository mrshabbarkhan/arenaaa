const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db_config");
const { errorHandler } = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = express();
app.use(cors());

// DB Connection
connectDB();

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({
//     msg: "WELCOME TO ARENA API 1.0",
//   });
// });

// User Routes
app.use("/api/user", require("./routes/userRoutes"));

// Projects Routes
app.use("/api/projects", require("./routes/projectRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

// error handler
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static("/var/data/uploads"));
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.black.bgBlue);
});
