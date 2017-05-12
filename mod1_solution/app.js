(function(){
  "use strict";
  angular.module("LunchChecker", [])
  .controller("LunchCheckerController", LunchCheckerController)

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.customStyle = {};
    $scope.showMessage = function(){
      $scope.message = countDishes($scope.dishes);
    };
  }

  function countDishes(string){
      if (string == "")
        return "Please enter data first";
      var dishArray = string.split(',');
      return (dishArray.length > 3) ?  "Too Much!" :  "Enjoy!";
  }

})();
