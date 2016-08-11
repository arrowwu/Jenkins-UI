'use strict';

// Register `jobDetail` component, along with its associated controller and template
angular.
  module('jobDetail').
  component('jobDetail', {
    templateUrl: 'job-detail/job-detail.template.html',
    controller: ['$routeParams', 'Job',
      function JobDetailController($routeParams, Job) {
        var self = this;
        self.job = Job.getJob({jobName: $routeParams.jobName}, function(job) {
          self.setImage(job.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
