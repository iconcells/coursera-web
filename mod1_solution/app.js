(function(){
  "use strict";
  angular.module("LunchChecker", [])
  .controller("LunchCheckerController", LunchCheckerController)

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.textColorClass = "";
    $scope.showMessage = function(){
      $scope.message = countDishes($scope.dishes);
      $scope.textColorClass = getTextColorClass($scope.dishes);
    };
  }

  function countDishes(string){
    if (string == "") return "Please enter data first";
    var dishArray = string.split(',');
    dishArray = dishArray.filter(function(str) {
                  return /\S/.test(str);
                });     // Filter Empty element in Array
    return (dishArray.length > 3) ?  "Too Much!" :  "Enjoy!";
  }

  function getTextColorClass(string){
    return string == "" ? "text-danger" : "text-primary"
  }

})();
