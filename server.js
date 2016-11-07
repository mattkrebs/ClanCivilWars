var express = require('express');

var firebase = require('firebase');

var app = express();

var router = express.Router();
var path = __dirname + '/views/';


var config = {
  apiKey: "AIzaSyC0bg9CRTRaTSITPBEijyW-gXcLkV4KSdU",
  authDomain: "destinyclanchallenge.firebaseapp.com",
  databaseURL: "https://destinyclanchallenge.firebaseio.com",
  storageBucket: "destinyclanchallenge.appspot.com",
  messagingSenderId: "519437896590"
};
firebase.initializeApp(config);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
