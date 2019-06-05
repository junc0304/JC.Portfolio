const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const Config = require('./config');

passport.use('jwt',new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: Config.JWT_SECRET
}, async (payload, done) => {
  try {
      const user = await User.findById(payload.sub);
      if(!user) {
          return done(null, false);
      }
      done(null, user);
  }
  catch (error) {
      done(error, false);
  }
}));

passport.use('local',new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) =>{
  try {
      const user = await User.findOne({email});
      if(!user) {
          return done(null, false);
      }
      const isMatch = await user.isValidPassword(password);
      if(!isMatch) {
          return done(null, false);
      }
      done(null, user);
  }
  catch (error) {
      done(error, false);
  }
}));
