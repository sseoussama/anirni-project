var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const FacebookTokenStrategy = require('passport-facebook-token');
var GooglePlusTokenStrategy = require('passport-google-plus-token');

var User            = require('../api/models/user.model.js');
var {facebookAuth} = require('./index');
var {googleAuth} = require('./index');
var {secret} = require('./index');

module.exports = function(passport) {


    var opts = {};
     opts.secretOrKey = secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
    
	 passport.use(new FacebookTokenStrategy({
    clientID: facebookAuth.clientID,
    clientSecret: facebookAuth.clientSecret
  }, function(accessToken, refreshToken, profile, done) {
    User.findOne({"facebook.id": profile.id}, function (error, user) {
    	if(error)  return done(err);
    	if(user) return done(null,user);
    	if(!user) 
    	{
           var newUser = new User();
           newUser.methode='facebook';
	    	newUser.facebook.id = profile.id;
	    	newUser.facebook.token = accessToken;
	    	newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
	    	newUser.facebook.email = profile.emails[0].value;
	    	newUser.save(function(err)
	    	{
	    		if(err) throw err;
	    		return done(null,newUser);
	    	})
    	}
      
    });
  }
));
	 passport.use(new GooglePlusTokenStrategy({
    clientID: googleAuth.clientID,
    clientSecret: googleAuth.clientSecret,
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, done) {
     User.findOne({"google.id": profile.id}, function (error, user) {
    	if(error)  return done(err);
    	if(user) return done(null,user);
    	if(!user) 
    	{
           var newUser = new User();
           newUser.methode='google';
	    	newUser.google.id = profile.id;
	    	newUser.google.token = accessToken;
	    	newUser.google.name = profile.displayName;
	    	newUser.google.email = profile.emails[0].value;
	    	newUser.save(function(err)
	    	{
	    		if(err) throw err;
	    		return done(null,newUser);
	    	})
    	}
      
    });
}));

};