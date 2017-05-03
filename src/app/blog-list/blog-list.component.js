'use strict';

angular.module('blogList').
	component('blogList', {
		// template: "<div><h1>{{title}}</h1></div>",
		templateUrl: 'templates/blog-list.html',
		controller: function($routeParams, $scope) {
			// console.log($routeParams);
			var blogItems = [{
				title: 'Some title',
				id: 1,
				description: 'This is a book',
				publishDate: '2016-01-25'
			}, {
				title: 'Title',
				id: 2,
				description: 'This is a book'
			}, {
				title: 'Tea',
				id: 3,
				description: 'This is a book'
			}, {
				title: 'Lite',
				id: 4,
				description: 'This is a book'
			}];

			$scope.items = blogItems || [];
		}
	});
	/*controller('BlogListController', function($scope) {
		console.log('hello');
		$scope.title = 'Hi there';
	});*/