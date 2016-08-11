'use strict';

// Register `newBuild` component, along with its associated controller and template
angular.
  module('newBuild').
  component('newBuild', {
    templateUrl: 'new-build/new-build.template.html',
    controller: ['$routeParams', 'Job',
      function NewBuildController($routeParams, Job) {
        var self = this;
//        self.job = Job.getJob({jobName: $routeParams.jobName});
//		  self.job = Job.buildJob({jobName: $routeParams.jobName});
		  
		  Job.buildJob({jobName: $routeParams.jobName});
		  self.name = $routeParams.jobName;
		  
      }
    ]
  });
