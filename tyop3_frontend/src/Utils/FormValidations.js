const firstName = {
  required: "First Name is required",
  maxLength: {
    value: 15,
    message: "First Name cannot exceed 15 characters",
  },
  minLength: {
    value: 3,
    message: "First Name cannot be less than 3 characters",
  },
  pattern: {
    value: /^[a-zA-Z]*$/,
    message: "First Name can only contain letters (uppercase and lowercase)",
  },
};

// const lastName = {
//   required: "Last Name is required",
//   maxLength: {
//     value: 15,
//     message: "Last Name cannot exceed 15 characters",
//   },
//   pattern: {
//     value: /^[a-zA-Z]*$/,
//     message: "Last Name can only contain letters (uppercase and lowercase)",
//   },
// };

const email = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
};

const phoneNumber = {
  required: "Phone Number is required",
  pattern: {
    value: /^\d{10}$/,
    message: "Phone number must be exactly 10 digits and contain only numbers",
  },
  minLength: {
    value: 10,
    message: "Phone number must be exactly 10 digits long",
  },
  maxLength: {
    value: 10,
    message: "Phone number must be exactly 10 digits long",
  },
};

const subject = {
  required: "Subject field is required",
  maxLength: {
    value: 250,
    message: "Subject field cannot exceed 15 characters",
  },
  minLength: {
    value: 3,
    message: "Subject field cannot be less than 3 characters",
  },
};

const Validations = {
  firstName,
  // lastName,
  email,
  phoneNumber,
  subject,
};

export default Validations;
