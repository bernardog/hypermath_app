'use strict';

angular
  .module('hypermathApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CalculatorController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
