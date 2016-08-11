'use strict';

angular.
  module('jobcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/jobs', {
          template: '<job-list></job-list>'
        }).
        when('/jobs/:jobName', {
          template: '<job-detail></job-detail>'
        }).
		when('/jobs/:jobName/builds/:buildNumber', {
          template: '<build-detail></build-detail>'
        }).
		when('/jobs/:jobName/newBuild', {
          template: '<new-build></new-build>'
        }).
        otherwise('/jobs');
    }
  ]);
