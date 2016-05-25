var express = require('express');
var app = express();
var http = require("http");
var https = require("https");
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var mongoose = require('mongoose');
var db = require('./config/db')
var User = require('./models/emailModel.js')
var keys = require('./config/config.js')

var port =  8080;

mongoose.connect(db.url)

app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));

app.listen(port);

app.get('*', function(req,res){
  res.redirect('/');
})

app.post('/postEmail', function(req,res){
  User.create(req.body);
})

app.post('/api/weather', function(req,res){
  var chunk = ''
  http.get('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + req.body.lat + '&lon=' + req.body.lon + '&appid=' + keys, function(req){
    var chunk = ''
    req.on('data', function(d){
      chunk = chunk + d
    })
    req.on('end', function(){
      res.end(chunk)
    })
  })
})


console.log('Running on port: ' + port);

module.exports = app;