'use strict';

angular.module('hypermathApp')
  .controller('CalculatorController', function ($scope) {

    $scope.result = null;
    $scope.x= null;
    $scope.y = null;
    var next = false;

    $scope.setValue = function (value) {
      $scope.result = null;
      if (next) {
        $scope.y = value;
        console.log('Y: ' + $scope.y);
      } else {
        $scope.x = value;
        console.log('X: ' + $scope.x);
      }
    };

    $scope.setOperation = function (operation) {
      $scope.operation = operation;
      next = true;
      console.log('OPERAÇÃO: ' + $scope.operation);
    };

    $scope.getResult = function () {
      switch ($scope.operation) {
      case '*':
        $scope.result = $scope.x * $scope.y;
        break;
      case '/':
        $scope.result = $scope.x / $scope.y;
        break;
      case '-':
        $scope.result = $scope.x - $scope.y;
        break;
      case '+':
        $scope.result = $scope.x + $scope.y;
        break;
      default:

      }
      $scope.operation = null;
      $scope.x         = null;
      $scope.y         = null;
      next             = false;
    };

  });
