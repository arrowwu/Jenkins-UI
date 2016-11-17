'use strict';

// Register `jobList` component, along with its associated controller and template
angular.
  module('jobList').
  component('jobList', {
    templateUrl: 'job-list/job-list.template.html',
    controller: ['Job',
      function JobListController(Job) {
        this.jobs = Job.query();          //CORS plugin needs to be installed in Jenkins
        this.orderProp = 'name';
      }
    ]
  });