const GoogleStrategy = require("passport-google-oauth2").Strategy;

module.exports = new GoogleStrategy(
  {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
    passReqToCallback: true,
    scope: ["profile", "email"],
  },
  async (request, accessToken, refreshToken, profile, done) => {
    console.log("Profile received:", profile);
    return done(null, profile);
  }
);
