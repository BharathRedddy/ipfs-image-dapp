var signupDetails = require('../models/signup');
const bcrypt = require('bcryptjs');

module.exports.SignUp = function (req, res) {



    bcrypt.hash(req.body.password, 10, (err, hash) => {

        if (err) {
            return res.status(400).json({
                error: err.message,
                status: 400
            })
        }
        var register = new signupDetails({
            emailid: req.body.emailid,
            password: hash,
            publickeyvalue: req.body.publickeyvalue,
            username: req.body.username

        })

        signupDetails.find({ emailid: req.body.emailid }).exec().then(result => {
            if (result.length > 0) {
                return res.status(409).json({
                    message: 'EmailId already exists',
                    status: 409
                });
            } else {
               register.save().then(data => {
                    return res.status(202).json({
                        message: 'User Details saved Successfully',
                        status: 202
                    });
                })
            }
        }).catch((error) => {
            return res.status(500).json({
                message: error.message,
                status: 500
            });
        })
    })

}