angular.module('escapeApp', ['escape.party', 'escape.result', 'ngRoute'])
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

  }).run(function ($rootScope, $location) {

  });