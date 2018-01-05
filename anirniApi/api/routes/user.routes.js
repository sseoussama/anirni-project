var User = require('../models/user.model.js');

var users = require('../controllers/user.controller.js');

module.exports = function(app, passport)
{


  
  /************************************************************************/
   
    app.get('/api/users',users.findAll);
    app.delete('/api/users/:userId',users.delete);
    app.delete('/api/users', users.deleteAll);
    app.post('/api/users/signup',users.signup);
    app.post('/api/users/login',users.login);
    app.get('/api/users/profile', passport.authenticate('jwt', { session: false}), users.profile);
    app.post('/api/users/auth/google', passport.authenticate('google-plus-token',{session:false}),users.googleAuth);
    app.post('/api/users/auth/facebook',passport.authenticate('facebook-token',{session:false}),users.facebookAuth);

    /************************************************************************/
     
    

};



    


   
