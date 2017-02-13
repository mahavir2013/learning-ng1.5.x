'use strict';

angular.module('blogList').
	component('blogList', {
		template: "<div><h1>{{title}}</h1></div>",
		controller: function($scope) {
			console.log('hello');
			$scope.title = 'Hi there';
		}
	});
	/*controller('BlogListController', function($scope) {
		console.log('hello');
		$scope.title = 'Hi there';
	});*/