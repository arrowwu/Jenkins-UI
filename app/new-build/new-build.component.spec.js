'use strict';

describe('jobDetail', function() {

  // Load the module that contains the `jobDetail` component before each test
  beforeEach(module('jobDetail'));

  // Test the controller
  describe('JobDetailController', function() {
    var $httpBackend, ctrl;
    var xyzJobData = {
      name: 'job xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('jobs/xyz.json').respond(xyzJobData);

      $routeParams.jobId = 'xyz';

      ctrl = $componentController('jobDetail');
    }));

    it('should fetch the job details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.job).toEqual({});

      $httpBackend.flush();
      expect(ctrl.job).toEqual(xyzJobData);
    });

  });

});
