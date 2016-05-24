angular.module('escapeApp', ['escape.party', 'escape.result', 'escape.thanks', 'ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/partyChooser', {
        templateUrl: 'app/pages/party.html',
        controller: 'PartyController'
      })
      .when('/result', {
        templateUrl: 'app/pages/result.html',
        controller: 'ResultController'
      })
      .when('/thanks', {
        templateUrl: 'app/pages/thanks.html',
        controller: 'ThanksController'
      })
      .otherwise({
        redirectTo: '/partyChooser'
      });

  }).run(function ($rootScope, $location) {

  });