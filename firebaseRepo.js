var firebase = require('firebase');

var destiny = require('destiny-client')('e6c8aa0810464e039c8fca61bbb594a4')

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


function findClan (name, callback){
    //Does clan exist in Bungie
    //var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('clans/' + name).once('value').then(function(snapshot) {
      console.log(snapshot.val());
      if (snapshot.val() == null){
        destiny.BungieGroup({name: name}).then(function(group){
          console.log(group);
          callback({name: group.detail.name,
            id: group.detail.groupId,
            avatar: `http://www.bungie.com${group.detail.avatarPath}`,
            existing:false
          });
        })

      }else{
        callback({name: name,
          id: 806412,
          avatar: 'http://www.bungie.net/img/profile/avatars/group/avatars_groups_titan2.jpg',
        existing: true});


      }
    });
    //YES, Is it part of CivilClanWars
      //Yes, display link to clan page

      //No, display link to create clan page

    //NO, show results if any


    //Save token to database



    //return object

  };
  function createClanPage(name, callback){
    require('crypto').randomBytes(4, function(err, buffer) {
        var token =  buffer.toString('hex');
        invite_url = `${baseUrl}join/${token}`;
        firebase.database().ref('clans/' + name).set({
          invite_url: `${baseUrl}join/${token}`,
          bungie_id : "111123455"
        });
    });
    //Genereate invite token
    //get clan info from bungie
    //save clan info
    //navigate to clan page

  };


module.exports = {
  findClan: findClan,
  getClan:getClan,
  createClan: createClan,
  createClanPage: createClanPage
};


function getClan(id, callback){
  firebase.database().ref('clans/' + id).once('value').then(function(snapshot) {

    if (snapshot.ErrorStatus != "Success"){
      callback(snapshot.val());
    }else{
      callback({error : true});
    }
  });
}
function createClan(name, callback)
{
  destiny.BungieGroup({name: name}).then(function(group){
    if (group.ErrorStatus == "Success"){
      require('crypto').randomBytes(4, function(err, buffer) {
          var token =  buffer.toString('hex');
          invite_url = `${baseUrl}join/${token}`;
          var newClan =   {
            invite_url: `${baseUrl}join/${token}`,
            id : group.detail.id,
            name: group.detail.name,
            avatar: `http://www.bungie.com${group.detail.avatarPath}`,
            about: group.datail.about,
            existing: true
          };
          firebase.database().ref('clans/' + group.detail.name).set(newClan).then(callback(newClan));
      });
    }
  });

}
