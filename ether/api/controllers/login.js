var signupDetails = require('../models/signup');
const bcrypt = require('bcryptjs');

module.exports.Login = function (req, res) {
    
    signupDetails.findOne({ publickeyvalue : req.body.publickeyvalue })
        .then((data) => {
            console.log(data);

            bcrypt.compare(
               req.body.password, data.password,
                (err, bcryptRes) => {
                    console.log(bcryptRes)
                    //if any error in bcryption 
                    if (err) {
                        return res.status(401).json({
                            message: 'password doesn\'t match',
                            error: err.message,
                            status: 401
                        });
                    }
                    // if password matches with the user Input 
                    if (bcryptRes == true) {

                        return res.status(202).json({
                            message: data,
                            status: 202
                        })
                    }
                    else if (bcryptRes == false) {

                        return res.status(400).json({
                            message: 'password incorrect',
                            status: 400
                        })
                    }
                })

        }).catch((error)=>
         {
        return res.status(500).json({
            message: error.message,
            status: 500
        });
    })

}