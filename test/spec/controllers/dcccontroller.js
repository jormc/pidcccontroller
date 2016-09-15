'use strict';

describe('Controller: DcccontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dccsuiteApp'));

  var DcccontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DcccontrollerCtrl = $controller('DcccontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DcccontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
