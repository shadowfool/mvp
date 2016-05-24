angular.module('escape.party', [])
.controller('PartyController', function($scope, $location) {
  $scope.parties = ['Democrat', 'Independent', 'Republican'];
  var chooseparty = function(party){
    $scope.party = party;
    $location.path('/compare');
  }
})