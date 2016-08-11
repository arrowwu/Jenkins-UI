'use strict';

// Register `buildDetail` component, along with its associated controller and template
angular.
  module('buildDetail').
  component('buildDetail', {
    templateUrl: 'build-detail/build-detail.template.html',
    controller: ['$routeParams', 'Job',
      function BuildDetailController($routeParams, Job) {
        var self = this;
        self.build = Job.getBuild({jobName: $routeParams.jobName, buildNumber: $routeParams.buildNumber});

      }
    ]
  });
