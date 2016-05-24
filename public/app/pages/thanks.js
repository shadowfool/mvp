angular.module('escape.thanks', [])
.controller('ThanksController', function($scope, $location) {
  // redirects to root
  $scope.showDate = false;
  $scope.change = function(){
    $location.path('/')
  }
});