const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      // default: "",
      required: true,
    },
    firstName: {
      type: String,
      // default: "",
      required: true,
    },
    lastName: {
      type: String,
      default: "",
      //   required: true,
    },
    email: {
      type: String,
      // default: "",
      required: true,
    },
    phoneNumber: {
      type: String,
      // default: "",
      required: true,
    },
    organization: {
      type: String,
      default: "",
      //   required: true,
    },
    designation: {
      type: String,
      default: "",
      //   required: true,
    },
    service: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    categories: {
      type: [String],
      default: [],
      //   required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
