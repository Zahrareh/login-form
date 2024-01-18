export const validate = (data) => {
  const errors = {};

  // Trim removes white spaces
  if (!data.name.trim()) {
    errors.name = "User name is required";
  } else {
    delete errors.name;
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Invalid email address";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is requiered";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  } else {
    delete errors.password;
  }

  if (!errors.confirmPassword) {
    errors.confirmPassword = "Confirm password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;

  } else {
    errors.isAccepted = "Accept our regulations";

  }
  
  return errors;
};

