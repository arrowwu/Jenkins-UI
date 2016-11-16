'use strict';

angular.
  module('core.job').
  factory('Job', ['$resource',
    function($resource) {
	  var baseUrl = 'http://10.1.75.195\\:8080';
      return $resource(baseUrl+'/job/:jobName/api/json', {}, {
        query: {
			         url: baseUrl+'/api/json',
                     method: 'GET',
                     isArray: true,
		             transformResponse: function(data, header) {
                          return angular.fromJson(data).jobs;
                     }
        },
		
		getJob: {
			         url: baseUrl+'/job/:jobName/api/json',
                     method: 'GET'
        },		
		
		
		buildJob: {
			         url: baseUrl+'/job/:jobName/build',
				     params: {jobName: '@jobName'},
                     method: 'POST'
        },
		
		getBuild: {
			         url: baseUrl+'/job/:jobName/:buildNumber/api/json',
                     method: 'GET'
        }
		
      });
    }
	
	
	
  ]);
