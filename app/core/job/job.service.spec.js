'use strict';

describe('Job', function() {
  var $httpBackend;
  var Job;
  var jobsData = [
    {name: 'Job X'},
    {name: 'Job Y'},
    {name: 'Job Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Job` service before each test
  beforeEach(module('core.job'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Job_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('jobs/jobs.json').respond(jobsData);

    Job = _Job_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the jobs data from `/jobs/jobs.json`', function() {
    var jobs = Job.query();

    expect(jobs).toEqual([]);

    $httpBackend.flush();
    expect(jobs).toEqual(jobsData);
  });

});
