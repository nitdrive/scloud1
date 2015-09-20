angular.module('starter.services', [])

.factory('Connect', function($ionicLoading,$rootScope,$http,$window) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    register: function(userdata){

	return $http.post('http://sa-server1.herokuapp.com/user/register',userdata);
    },
    checkUsername: function(user) {
      
        return $http.get('http://sa-server1.herokuapp.com/user/check/'+user.uname);
    },
    login: function(user) {

	return $http.post('http://sa-server1.herokuapp.com/user/login/',user); 
    },
    update: function(user) {
	console.log("Here");
	return $http.post('http://sa-server1.herokuapp.com/user/update/',user); 
   },
   getdetails: function(uname) {

	return $http.get('http://sa-server1.herokuapp.com/user/getdetails/'+uname);
   },
   getSignedURL: function(uname,filetype,newname,fileNameParts,contents){
	
      var filename = newname+"."+fileNameParts[1];
	
      console.log(filename+"-"+contents);
  	
      return $http.get('http://sa-server1.herokuapp.com/sign_s3/'+uname+'?file_name='+filename+'&file_type='+filetype);

   },
   registerUploads: function(filemetadata) {
	console.log("Registering uploads...");
	return $http.post('http://sa-server1.herokuapp.com/user/registeruploads',filemetadata); 
   },
   getUploads: function(uname) {
	console.log("Getting uploads...");
	return $http.get('http://sa-server1.herokuapp.com/user/getuploads/'+uname); 
   }
  };
});
