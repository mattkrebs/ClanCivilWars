var destiny = require('destiny-client')('e6c8aa0810464e039c8fca61bbb594a4');

function FindUser(userId) {
  destiny.BungieUser({membershipId : '4611686018446222945'})
  .then(function(user){
    return user;
  });
}

function FindGroup(name){
  destiny.
}
