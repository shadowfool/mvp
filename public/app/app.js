angular.module('escapeApp', ['escape.party', 'ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/partyChooser', {
        templateUrl: 'app/pages/party.html',
        controller: 'PartyController'
      })

}).run(function ($rootScope, $location) {

});