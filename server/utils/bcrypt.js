const bcrypt = require("bcryptjs");

module.exports = (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error while creating user.");
  }
};
