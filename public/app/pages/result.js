angular.module('escape.result', [])
.controller('ResultController', function($scope, $rootScope, $location, $http, $route) {
  //show booleans, hiding for smooth loading after api calls
  $scope.showBigMac = false;
  $scope.loading = false;
  //reloads page on click
  $scope.mulligan = function(){
    $route.reload();
  }
 // posts email to DB
  $scope.postEmail = function(email){
    if(email){
      var userObject = {};
      userObject.email = email.email;
      userObject.party = $rootScope['party'];
      $http.post("/postEmail", userObject)
        .success(function(data, status){  
      });
      $location.path('/thanks');
    }
  };
  // spits out message depending on party;
  $scope.messages = function(){
      if($rootScope['party']== 'Democrat'){
        $scope.message = 'It\'s over, and you let it happen!'
      }
      if($rootScope['party'] == 'Independent'){
        $scope.message = 'You were bound to lose one way or another. Next time, pick a side. '
      }
      if($rootScope['party'] == 'Republican'){
        $scope.message = 'Really? You were gunning for Trump?'
      }
  }
  // gives you a random currency and the exchange rate
  var pickRandomcurrency = function(currencyData){
    var result = [];
    var keys = Object.keys(currencyData.rates);
    result.push(keys[Math.floor(Math.random()*keys.length)]);
    result.push(currencyData.rates[result[0]]);
    return result;
  };

  $http.get('http://api.fixer.io/latest?base=USD').
  then(function(response){
    return pickRandomcurrency(response.data);
  })
  .then(function(currency){
    $http.get('https://restcountries.eu/rest/v1/currency/' + currency[0])
    .then(function(response){
      var country = response.data[Math.floor(Math.random()*response.data.length)];
      $scope.messages();
      $scope.data = country;
      $scope.currency = currency;
      $scope.rate = currency[1];
      // show big mac cost if exists in costOfBigMac data set
      if(costOfBigMac[$scope.data.name] !== undefined){
        $scope.showBigMac = true;
        $scope.bigMac = ($scope.rate/costOfBigMac[$scope.data.name] * 100).toFixed(2);
      }
      // unhide all elements for smooth loading
      $scope.loading = true;
    })
  })
  // manual data set of big mac cost per country in native curency
  var costOfBigMac = {'Argentina': 33,
    'Australia': 5.3,
    'Brazil': 13.5,
    'Britain': 2.89,
    'Canada':  5.84,
    'Chile': 2100,
    'China': 17.6,
    'Colombia': 7900,
    'Costa Rica': 2150,
    'Czech Republic': 75,
    'Denmark': 30,
    'Egypt': 16.93,
    'EUR': 3.72,
    'Hong Kong': 19.2,
    'Hungary': 900,
    'India': 127,
    'Indonesia': 30500,
    'Israel':  16.9,
    'Japan': 370,
    'Malaysia': 8,
    'Mexico': 49,
    'New Zealand': 5.9,
    'Norway': 46.8,
    'Pakistan': 300,
    'Peru': 10,
    'Philippines': 131,
    'Poland': 9.6,
    'Russia': 114,
    'Republic of Ireland': 3.6,
    'Saudi Arabia': 12,
    'Singapore': 4.7,
    'South Africa':  28,
    'South Korea': 4300,
    'Sri Lanka': 350,
    'Sweden':  45,
    'Switzerland': 6.5,
    'Taiwan': 69,
    'Thailand': 112,
    'Turkey': 10.25,
    'UAE': 13,
    'Ukraine': 36,
    'United States': 4.93,
    'Uruguay': 113,
    'Venezuela': 132,
    'Vietnam': 60000,
    'Austria': 3.5,
    'Belgium': 3.95,
    'Estonia': 3,
    'Finland': 4.1,
    'France':  4.1,
    'Germany': 3.59,
    'Greece':  3.35,
    'Ireland': 3.95,
    'Italy': 4,
    'Netherlands': 3.45,
    'Portugal':  3,
    'Spain': 3.5,
    'Romania': 9.8,
    'Tokelau': 5.9,
    'Bulgaria': 3.99,
    'Bhutan': 269,
    'Greenland': 30,
    'Heard Island and McDonald Islands': .0001
  }
});



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



//http://fixer.io/ for currency
//http://api.fixer.io/latest?base=USD for JSON of current currency rates

//https://restcountries.eu/rest/v1/currency/eur for countries that use the currency