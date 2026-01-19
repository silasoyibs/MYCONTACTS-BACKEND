const asyncHandler = require("express-async-handler");
// @desc Get all contatcs
// @route GET /api/contacts
// access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all conatcts" });
});

// @desc Get all contatcs
// @route POST/api/contacts
// access public
const createContact = asyncHandler(async (req, res) => {
  console.log("the request body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory !");
  }
  res.status(201).json({ message: "Create Contact" });
});

// @desc Get all contatcs
// @route POST/api/contacts/:id
// access public
const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

// @desc update contatcs
// @route PUT/api/contacts
// access public
const updateContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

// @desc Get all contatcs
// @route POST/api/contacts/:id
// access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delte Contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
