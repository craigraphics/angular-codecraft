(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.directive:ccCard
   * @description
   * # ccCard
   * directive of the ccCard
   */
  angular.module('codecraft')
    .directive('ccCard', function () {
    	return {
    		'restrict': 'AE',
    		'templateUrl': 'views/card.html',
    		'scope': {
    			'user': '='
    		},
    		'controller': function ($scope, ContactService) {
    			$scope.isDeleting = false;
    			$scope.deleteUser = function () {
    				$scope.isDeleting = true;
    				ContactService.removeContact($scope.user).then(function () {
    					$scope.isDeleting = false;
    				});
    			};

    		}
    	};
    });
})();
