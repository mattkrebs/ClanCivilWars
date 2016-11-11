var firebase = require('firebase');

var baseUrl = "http://localhost:3000/";

var config = {
   apiKey: "AIzaSyCoPmwgnfNIKvwJp3muT23S1C606m78zPY",
   authDomain: "clancivilwars.firebaseapp.com",
   databaseURL: "https://clancivilwars.firebaseio.com",
   storageBucket: "clancivilwars.appspot.com",
   messagingSenderId: "534515480450"
 };
 firebase.initializeApp(config);

 const dbClans = firebase.database().ref().child('clans');


function findClan (name){
    //Does clan exist in Bungie
    //var userId = firebase.auth().currentUser.uid;
  return   firebase.database().ref('clans/' + name).once('value').then(function(snapshot) {
      console.log(snapshot.val());
      if (snapshot.val() == null){
        console.log("creating clan" + createClan(name));
        //createClan(name);

      }
    });
    //YES, Is it part of CivilClanWars
      //Yes, display link to clan page

      //No, display link to create clan page

    //NO, show results if any


    //Save token to database



    //return object
    
  };
  function createClanPage(name){
    //Genereate invite token
    //get clan info from bungie
    //save clan info
    //navigate to clan page

  };


module.exports = {
  findClan: findClan,
  createClanPage: createClanPage
};

function createClan(name)
{

   return require('crypto').randomBytes(4, function(err, buffer) {
      var token =  buffer.toString('hex');
      invite_url = `${baseUrl}join/${token}`;
      firebase.database().ref('clans/' + name).set({
        invite_url: `${baseUrl}join/${token}`,
        bungie_id : "111123455"
      });
  });
}
