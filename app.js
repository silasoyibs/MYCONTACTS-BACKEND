const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

// start express app
const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Phaser
app.use(express.json());

// ROUTES
app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/users", userRoutes);

// 404 (no route matched) — AFTER your routes
app.use((req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

// middleware globar error handler
app.use(globalErrorHandler);

module.exports = app;
