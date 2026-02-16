const AppError = require("../utils/appError");

// handle invalid Database Ids
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}.`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // operational error message, trusted error sent to client
  if (err.isOperational) {
    console.log("operational");
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console error
    console.log("not operational");
    console.log("Error 💥", err);
    console.log("something went wrong");
    // generic error message
    res.status(500).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;
    if (error.name === "CastError") error = handleCastErrorDB(error);
    sendErrorProd(error, res);
  }
};
