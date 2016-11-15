var express = require('express');
var firebase = require('./firebaseRepo');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var baseUrl = "http://localhost:3000";

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();
var path = __dirname + '/views/';




router.get('/user/:id', function(req, res){

  destiny.BungieUser({membershipId : '4611686018446222945'})
  .then(users => {
    res.send(users);
  });
});

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render('index');
});

router.get("/signup", function(req, res){
  res.render('signup', {name: null, id:null});
});

router.post("/signup", function(req, res){
  console.log(req.body.name);
  //look up clan and display it below
  var clanNames = req.body.name;
  firebase.findClan(req.body.name, function(clan){
    res.render('signup', clan);
  });
})

router.get("/create/:name/:id", function(req, res){
  firebase.createClan(req.params, function(clan){
      res.render('clan', clan);
  });
})

router.get("/clan/:id", function(req, res){
  //console.log(req.params.id)
  firebase.getClan(req.params.id, function(clan){
    //console.log(clan);
    if (clan.error !== undefined){
      res.render('error');
    }else{
      clan.invite_url = baseUrl + clan.invite_url;
      res.render('clan', clan);
    }

  });
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
