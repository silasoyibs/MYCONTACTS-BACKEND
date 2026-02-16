const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authController = require("../controllers/authControllerController");

router
  .route("/")
  .get(authController.protect, contactController.getAllContact)
  .post(contactController.createContact);

router
  .route("/:id")
  .get(contactController.getContactById)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
