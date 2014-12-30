var app = angular.module('sellit', ['ionic', 'controllers', 'services','models','directives'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    


  });


});

app.constant('API_URL','http://vm-sellit.cloudapp.net/');

app.config(function($stateProvider,$httpProvider,$urlRouterProvider) {
 
  

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $stateProvider

    .state('main', {
      url: "/main",
      controller: 'MainCtrl',
      templateUrl: "templates/main.html"
    })

    .state('login', {
      url: "/login",
      controller: 'LoginCtrl',
      templateUrl: "templates/login.html"
    })
 
    .state('newpass', {
      url: "/newpass",
      controller: 'NewPassCtrl',
      templateUrl: "templates/newpass.html"
    })

    .state('newpass2', {
      url: "/newpass2",
      controller: 'NewPassCtrl2',
      templateUrl: "templates/newpass2.html"
    })

    .state('new2', {
      url: "/new2",
      controller: 'NewCtrl2',
      templateUrl: "templates/new2.html"
    })

    

    .state('signup', {
      url: "/signup",
      controller: 'SignupCtrl',
      templateUrl: "templates/signup.html"
    })
   
   .state('dashboard', {
      url: "/dashboard",
      controller: 'DashCtrl',
      templateUrl: "templates/dashboard.html"
    })

   .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

     // the pet tab has its own child nav-view and history
    .state('tab.cam', {
      url: '/cam',
      views: {
        'cam-tab': {
          templateUrl: 'templates/cam.html',
          controller: 'CamCtrl'
        }
      }
    })

     .state('tab.record', {
      url: '/record',
      views: {
        'record-tab': {
          templateUrl: 'templates/record.html',
          controller: 'RecordCtrl'
        }
      }
    })

    .state('tab.list', {
      url: '/list',
      views: {
        'list-tab': {
          templateUrl: 'templates/list.html',
           controller: 'ListCtrl'
      }
      }
    });
    



  $urlRouterProvider.otherwise('/main');

});

