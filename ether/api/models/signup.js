var mongoose = require('mongoose');
var schema = mongoose.Schema;

var signUpSchema = new schema({
    publickeyvalue: { type: String, required: true },
    username: { type: String, required: true },
    emailid: { type: String, required: true },
    password: { type: String, required: true }

});

module.exports = mongoose.model('Signup', signUpSchema);