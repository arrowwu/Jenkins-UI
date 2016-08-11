'use strict';

describe('jobList', function() {

  // Load the module that contains the `jobList` component before each test
  beforeEach(module('jobList'));

  // Test the controller
  describe('JobListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('jobs/jobs.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('jobList');
    }));

    it('should create a `jobs` property with 2 jobs fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.jobs).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.jobs).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
