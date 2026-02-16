const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Get all users
// @route GET /api/users
// access public
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});
