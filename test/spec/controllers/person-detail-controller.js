'use strict';

describe('Controller: PersonDetailController', function () {

  // load the controller's module
  beforeEach(module('codecraft'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, ContactService;) {
    scope = $rootScope.$new();
    PersonDetailController = $controller('PersonDetailController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonDetailController.mode).toBe('Edit');
  });
});
