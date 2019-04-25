var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/ether',{ useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Request methods you wish to allow
    res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    
    res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
    });

var routes = require('./routes/routes.js');
routes(app);

app.listen(port);
console.log('port is'+port);