module.exports= function(app){

    var sign = require('../api/controllers/signUp');
    app.route('/imagePortal/Signup').post(sign.SignUp);

    var login = require('../api/controllers/login');
    app.route('/imagePortal/Signin').post(login.Login);
    
}; 