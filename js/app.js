// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.feedservices','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  // setup an abstract state for the tabs directive
    .state('landing', {
    url: '/landings',
    abstract: true,
    templateUrl: 'templates/landings.html'
  })

    .state('landing.login', {
    url: '/login',
    views: {
      'landing-login': {
        templateUrl: 'templates/userlogin.html',
        controller: 'LandingCtrl'
      }
    }
  })

    .state('landing.loginnew', {
    url: '/login/:uname',
    views: {
      'landing-login': {
        templateUrl: 'templates/userlogin.html',
        controller: 'LandingCtrl'
      }
    }
  })

   .state('landing.register', {
    url: '/register',
   views: {
      'landing-register': {
        templateUrl: 'templates/userregister.html',
        controller: 'LandingCtrl'
      }
    }
  })

   .state('landing.registersuccess', {
    url: '/registersuccess',
   views: {
      'landing-register': {
        templateUrl: 'templates/registersuccess.html',
        controller: 'LandingCtrl'
      }
    }
  })

   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash/:firstName',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

   

    .state('tab.profilep1', {
      url: '/profile/p1',
      views: {
        'tab-profile': {
          templateUrl: 'templates/profile.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    
    
  

     .state('tab.fileupload', {
      url: '/fileupload',
      views: {
        'tab-fileupload': {
          templateUrl: 'templates/fileupload.html',
          controller: 'UploadCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.contactus', {
    url: '/contactus',
    views: {
      'tab-contactus': {
        templateUrl: 'templates/contact.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landings/login');

});
