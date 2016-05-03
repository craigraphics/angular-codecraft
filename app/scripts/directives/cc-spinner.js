(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.directive:ccSpinner
   * @description
   * # ccSpinner
   * directive of the ccSpinner
   */
  angular.module('codecraft')
    .directive('ccSpinner', function () {
    	return {
    		'restrict': 'AE',
    		'templateUrl': 'views/spinner.html',
    		'scope': {
    			'isLoading': '=',
    			'message': '@'
    		}
    	};
      
    });

})();
