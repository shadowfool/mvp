angular.module('escape.thanks', [])
.controller('ThanksController', function($scope, $location) {
  // redirects to root
  $scope.change = function(){
    $location.path('/')
  }
});