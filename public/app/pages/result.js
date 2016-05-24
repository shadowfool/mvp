angular.module('escape.result', [])
.controller('ResultController', function($scope, $location, $http, $route) {
  $scope.mulligan = function(){
    $route.reload()
  };
  // gives you a random curency and the exchange rate
  var pickRandomCurency = function(curencyData){
    var result = [];
    var keys = Object.keys(curencyData.rates);
    result.push(keys[Math.floor(Math.random()*keys.length)]);
    result.push(curencyData.rates[result[0]]);
    $scope.rate = result[1];
    return result;
  };

  $http.get('http://api.fixer.io/latest?base=USD').
  then(function(response){
    return pickRandomCurency(response.data);
  })
  .then(function(curency){
    $http.get('https://restcountries.eu/rest/v1/currency/' + curency[0])
    .then(function(response){
      var country = response.data[Math.floor(Math.random()*response.data.length)];
      $scope.data = country;
      $scope.curency = curency;
    });
  });
  console.log($scope)
})



//http://fixer.io/ for curency
//http://api.fixer.io/latest?base=USD for JSON of current curency rates

//https://restcountries.eu/rest/v1/currency/eur for countries that use the curency