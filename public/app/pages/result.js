angular.module('escape.result', [])
.controller('ResultController', function($scope, $rootScope, $location, $http, $route) {
  $scope.mulligan = function(){
    $route.reload()
  }
  $scope.messages = function(){
      if($rootScope['party']== 'Democrat'){
        $scope.message = 'It\'s over, and you let it happen!'
      }
      if($rootScope['party'] == 'Independent'){
        $scope.message = 'You were bound to lose one way or another. Next time pick a side. '
      }
      if($rootScope['party'] == 'Republican'){
        $scope.message = 'Really? You were gunning for Trump?'
      }
  }
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
      console.log('somthing')
      $scope.messages();
    });
  });
})
// .service('poliMessage', function($rootScope){
//     this.testParty = function(){
//       if($rootScope['party']== 'Democrat'){
//         return 'It\'s over, and you let it happen!'
//       }
//       if($rootScope['party'] == 'Independent'){
//         return 'You were bound to lose one way or another. Next time pick a side. '
//       }
//       if($rootScope['party'] == 'Republican'){
//         return 'Really? You were gunning for Trump?'
//       }
//     }
// })



//http://fixer.io/ for curency
//http://api.fixer.io/latest?base=USD for JSON of current curency rates

//https://restcountries.eu/rest/v1/currency/eur for countries that use the curency