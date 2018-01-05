var User = require('../models/user.model');
var jwt  = require('jwt-simple');
exports.googleAuth=function(req,res)
{
   var token = jwt.encode(req.user,'anirniscyak');
   // return the information including token as JSON
   res.status(200).json({success: true, token: 'JWT ' + token});
   

}
exports.facebookAuth=function(req,res)
{
  var token = jwt.encode(req.user,'anirniscyak');
   // return the information including token as JSON
   res.status(200).json({success: true, token: 'JWT ' + token});
}
exports.profile=function(req, res) {

     var token = getToken(req.headers);
     if (token) {
      var decoded = jwt.decode(token,'anirniscyak');
      switch(decoded.methode)
      {
        case 'local' : {getLocalUser(res,decoded); break;}
        case 'facebook' :{getFacebookUser(res,decoded); break;}
        case 'google':{getGoogleUser(res,decoded); break;}
        default : break;
      }
    }
      else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
}

exports.login=function(req, res) {
      User.findOne({
     'local.username': req.body.email
    }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.status(400).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      
        if (user.validPassword(req.body.password)) {
          // if user is found and password is right create a token
          var token = jwt.encode(user,'anirniscyak');
          // return the information including token as JSON
          res.status(200).json({success: true, token: 'JWT ' + token});
        } else {
          res.status(300).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      ;
    }
    });
   }
exports.signup=function(req, res) {
        if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password.'});
         } 
         else {
             User.findOne({'local.username':req.body.email},function(err,user)
           {
              if(err) throw err;
              if(user) res.status(300).json({success: false, msg: "Email already taken"});
              if(!user)
              {
                    var newUser = new User();
                    newUser.methode='local';
                    newUser.local.username= req.body.email;
                    newUser.local.password= newUser.generateHash(req.body.password);
                    
             // save the user
                newUser.save(function(err) {
                if (err) throw err;
                res.status(200).json({success: true, msg: 'Successful created new user.'});
               })
              }
              
           
      });
         }}
exports.findAll = function(req, res) {
    User.find(function(err, notes){
        if(err) {
            res.status(400).send({message: "Some error occurred while retrieving notes."});
        } else {
          
            res.send(notes);
        }
    });

    };
  exports.delete = function(req, res) {
    
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });

    };
  exports.deleteAll = function(req, res) {
    
    User.remove(function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete users"});
        } else {
            res.send({message: "Users deleted successfully!"})
        }
    })

    }

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
getLocalUser=function(res,decoded)
{
   User.findOne({
      'local.username': decoded.local.username
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, user:user});
        }
    });
  }

getFacebookUser=function(res,decoded)
{
   User.findOne({
      'facebook.id': decoded.facebook.id
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, user:user});
        }
    });
  }

getGoogleUser=function(res,decoded)
{
   User.findOne({
      'google.id': decoded.google.id
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, user:user});
        }
    });
  }
