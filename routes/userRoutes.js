const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// User Auth Controller

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// User Controller
router.get("/", userController.getAllUsers);

module.exports = router;
