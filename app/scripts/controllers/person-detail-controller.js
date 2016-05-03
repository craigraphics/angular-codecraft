(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name codecraft.controller:PersonDetailController
   * @description
   * # PersonDetailController
   * Controller of the codecraft
   */
  angular.module('codecraft')
    .controller('PersonDetailController', function ($stateParams, $state, ContactService) {
      var vm = this;
    	vm.mode = 'Edit';

    	vm.contacts = ContactService;
    	vm.contacts.selectedPerson = vm.contacts.getPerson($stateParams.email);


    	vm.save = function () {
    		vm.contacts.updateContact(vm.contacts.selectedPerson).then(function () {
    			$state.go('list');
    		});

    	};

    	vm.remove = function () {
    		vm.contacts.removeContact(vm.contacts.selectedPerson).then(function () {
    			$state.go('list');
    		});
    	};

    });
})();
