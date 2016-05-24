angular.module('escape.party', [])
.controller('PartyController', function($scope, $location) {
  $scope.parties = ['Democrat', 'Independent', 'Republican'];
  $scope.chooseparty = function(party){
    $scope.party = party;
    console.log(party);
    $location.path('/result');
  }
})
