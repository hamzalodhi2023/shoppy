const passport = require("passport");

module.exports.authentication = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports.callback = passport.authenticate("google", {
  successRedirect: "http://localhost:5173/user-settings",
  failureRedirect: "http://localhost:5173/signin",
});
