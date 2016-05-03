(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.factory:Contact
   * @description
   * # Contact
   * Service of the codecraft
   */
  angular.module('codecraft')
    .factory('Contact', function ($resource) {
      return $resource('https://codecraftpro.com/api/samples/v1/contact/:id/', {id: '@id'}, {
        update: {
          method: 'PUT'
        }
      });
    });

})();
