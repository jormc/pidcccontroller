'use strict';

/**
 * @ngdoc function
 * @name dccsuiteApp.controller:DcccontrollerCtrl
 * @description
 * # DcccontrollerCtrl
 * Controller of the dccsuiteApp
 */
angular.module('dccsuiteApp')
  .controller('DcccontrollerCtrl', function ($scope, $http) {

	  var nonId = '----';
	  var current = 0;
	  
	  $scope.isDisabled = true;
	  
	  $scope.locomotiveSpeedSlider = {
		value : 0,
		options : {
			floor : 0,
			ceil : 128,
			vertical : true,
			showSelectionBar : true
		}
	  };
	  
	  $scope.locomotive = {
		id: nonId,
		functions: [false, false, false, false, false],
		disabled: true
	  }
	  
	  $scope.locomotives = [];
	  
	  // Load locomotives from server only first time
	  $http.get('/data/locomotives.json').then(function(response) {
		  $scope.locomotives = response.data;  
	  });
	  
	  $scope.changeLocomotive = function(isUp) {
		if (isUp) {
			current++;
			if (nonId === $scope.locomotive.id || current >= $scope.locomotives.length) {
				current = 0;
			}	
		} else {
			current--;
			if (nonId === $scope.locomotive.id || current < 0) {
				current = $scope.locomotives.length - 1;
			}
		}
		
		$scope.locomotive = $scope.locomotives[current];
	  }
	  
	  $scope.toggleFn = function(fn) {
		  $scope.locomotive.functions[fn] = !$scope.locomotive.functions[fn];
		  console.log('fn'+fn+':'+$scope.locomotive.functions[fn]);
	  }
	  
  });
