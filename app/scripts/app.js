'use strict';

angular
  .module('hypermathApp', [
    'ngRoute',
    'ngResource'
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
