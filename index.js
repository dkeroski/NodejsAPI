
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resumeDB');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.get('/',function(req,res){
//   res.json({hello: "Hi"});
// });

var cats = require('./resume-routs.js')(app);


var server = app.listen(3000,function() {
  console.log("App listen on port");
})
console.log("Server start");
