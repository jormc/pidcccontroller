'use strict';

/**
 * @ngdoc overview
 * @name dccsuiteApp
 * @description
 * # dccsuiteApp
 *
 * Main module of the application.
 */
angular
  .module('dccsuiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'switcher',
    'rzModule'
    
    // 'uiSwitch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/DccController', {
        templateUrl: 'views/dcccontroller.html',
        controller: 'DcccontrollerCtrl',
        controllerAs: 'DccController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
