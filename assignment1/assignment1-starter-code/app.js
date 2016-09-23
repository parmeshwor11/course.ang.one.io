(function (){
  'use strict';

  angular.module('hwApp',[])
  .controller('hwCtrl',hwCtrl);

  hwCtrl.$inject=['$scope'];

  function hwCtrl($scope){
    $scope.dishes = '';
    $scope.checkdishes = function(){
      var y = $scope.dishes.trim();

      var x = $scope.dishes.split(",");
      if(y.length==0){
          $scope.message = 'its empty';
      }else if(x.length<=3){
          $scope.message = 'low';
      }else {
        $scope.message = 'high'
      }
    }
  }

})();
