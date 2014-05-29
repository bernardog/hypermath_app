'use strict';

angular.module('hypermathApp')
  .controller('CalculatorController', function ($scope, $http) {

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
      var data = {operation: {x: $scope.x, y: $scope.y}};
      switch ($scope.operation) {
      case '*':
        $http.post('http://hypermath-api.herokuapp.com/operations/multiply', data)
          .success(function (data) {
            $scope.result = data.result;
          });
        break;
      case '/':
        $http.post('http://hypermath-api.herokuapp.com/operations/divide', data)
          .success(function (data) {
            $scope.result = data.result;
          });
        break;
      case '-':
        $http.post('http://hypermath-api.herokuapp.com/operations/subtract', data)
          .success(function (data) {
            $scope.result = data.result;
          });
        break;
      case '+':
        $http.post('http://hypermath-api.herokuapp.com/operations/add', data)
          .success(function (data) {
            $scope.result = data.result;
          });
        break;
      default:

      }
      $scope.operation = null;
      $scope.x         = null;
      $scope.y         = null;
      next             = false;
    };

  });
