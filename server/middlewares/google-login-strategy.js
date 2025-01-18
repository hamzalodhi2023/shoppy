const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { success } = require("../controllers/users/google-login");

module.exports = new GoogleStrategy(
  {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
    passReqToCallback: true,
    scope: ["profile", "email"],
  },
  (request, accessToken, refreshToken, profile, done) => {
    success(request, accessToken, refreshToken, profile, done);
  }
);
