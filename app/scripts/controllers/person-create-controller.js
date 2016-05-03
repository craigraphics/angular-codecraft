(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.controller:PersonCreateController
   * @description
   * # PersonCreateController
   * Controller of the codecraft
   */
  angular.module('codecraft')
    .controller('PersonCreateController', function ($state, ContactService) {
      var vm = this;
      vm.mode = 'Create';

    	vm.contacts = ContactService;
    	vm.contacts.selectedPerson = {};

    	vm.save = function () {
    		console.log('createContact');
    		vm.contacts.createContact(vm.contacts.selectedPerson)
    			.then(function () {
    				$state.go('list');
    			});
    	};
    });
})();
