(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.controller:PersonListController
   * @description
   * # PersonListController
   * Controller of the codecraft
   */
  angular.module('codecraft')
  .controller('PersonListController', function ($modal, ContactService) {
    var vm = this;

    vm.search = '';
    vm.order = 'email';
    vm.contacts = ContactService;

    vm.loadMore = function () {
      vm.contacts.loadMore();
    };

  });
})();
