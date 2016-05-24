angular.module('escape.party', [])
.controller('PartyController', function($scope, $rootScope, $location) {
  $scope.parties = ['Democrat', 'Independent', 'Republican'];
  $scope.days = 167;
  $scope.chooseparty = function(party){
    $rootScope.party = party;
    $location.path('/result');
  }
})