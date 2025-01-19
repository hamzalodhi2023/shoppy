const passport = require("passport");
const debug = require("debug")("development:controllers:users:google-login.js");

module.exports.success = (
  request,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  debug("Profile received:", profile);
  return done(null, profile);
};

module.exports.authentication = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports.callback = passport.authenticate("google", {
  successRedirect: "http://localhost:5173/shop",
  failureRedirect: "http://localhost:5173/signin",
});
