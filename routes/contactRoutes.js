const express = require("express");
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContactById).put(updateContact);

// router.route("/:id").delete();

module.exports = router;
