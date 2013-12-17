#!/bin/env node
var express = require('express'),
    app = express();
var path = require('path');


var public_dir = path.join(__dirname, 'public');
app.use('/public', express.static(public_dir));


app.get('/*', function(req, res){
    res.redirect('/#!' + req.path);
});

var server = app.listen(5555, '127.0.0.1', function() {
    console.log('Server start on 127.0.0.1:5555');
});
