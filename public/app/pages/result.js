angular.module('escape.result', [])
.controller('ResultController', function($scope, $location, $http) {
  var pickRandomCurency = function(curencyData){
    var result = [];
    var keys = Object.keys(curencyData.rates);
    result.push(obj[keys[ keys.length * Math.random() << 0]]);
    result.push(curencyData.rates(result[0]));
    return result;
  }
  $http.get('http://api.fixer.io/latest?base=USD').
  then(function(response){
    return pickRandomCurency(response);
  })
  .then(function(curency){
    $http.get('https://restcountries.eu/rest/v1/currency/' + curency[0])
    .then(function(response){
      var country = response[Math.floor(Math.random()*response.length)];
      $scope.data = country;
    });
  });
  console.log($scope.data); 
})

//http://fixer.io/ for curency
//http://api.fixer.io/latest?base=USD for JSON of current curency rates

//https://restcountries.eu/rest/v1/currency/eur for countries that use the curency