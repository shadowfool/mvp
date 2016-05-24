var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var db = require('./config/db')

var port =  8080;

// mongoose.connect(db.url)

app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('X-HTTP-Method-Override')); 

app.listen(port);

app.get('*', function(req,res){
  res.redirect('/');
})

console.log('Running on port: ' + port);

module.exports = app;