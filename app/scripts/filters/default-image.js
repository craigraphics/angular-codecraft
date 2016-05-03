(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.filter:defaultImage
   * @description
   * # ccCard
   * filter of the defaultImage
   */
  angular.module('codecraft')
    .filter('defaultImage', function () {
    	return function (input, param) {
    		if (!input) {
    			return param;
    		}
    		return input;
    	};

    });
})();
