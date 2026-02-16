const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const AppError = require("../utils/appError");
// @desc Get all contatcs
// @route GET /api/contacts
// access public
exports.getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    status: "success",
    data: {
      contacts,
    },
  });
});

// @desc Get all contatcs
// @route POST/api/contacts
// access public
exports.createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    throw new AppError("All Fields are mandatory !", 404);
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json({
    status: "success",
    data: {
      contact,
    },
  });
});

// @desc Get all contatcs
// @route POST/api/contacts/:id
// access public
exports.getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }
  res.status(200).json({
    status: "success",
    data: {
      contact,
    },
  });
});

// @desc update contatcs
// @route PUT/api/contacts
// access public
exports.updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.status(200).json({
    status: "success",
    data: {
      updateContact,
    },
  });
});

// @desc Get all contatcs
// @route POST/api/contacts/:id
// access public
exports.deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }
  await contact.deleteOne();
  res.status(200).json({
    status: "success",
    data: {
      contact,
    },
  });
});
