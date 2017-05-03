'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: 'templates/blog-detail.html',
		controller: function($http, $location, $routeParams, $scope) {	
			$scope.notFound = false;

			$http.get('/json/posts.json').then(successCallback, errorCallback);

			function successCallback(response) {
				var blogItems = response.data;
				angular.forEach(blogItems, function(post) {
					if (post.id === +$routeParams.id) {
						$scope.notFound = false;
						$scope.post = post;
					}
				});
			}

			function errorCallback(response) {
				$scope.notFound = true;
				console.log(response);
			}

			if ($scope.notFound) {
				console.log('Not found');
				// change location
				$location.path('/404');
			}
			
			// var blogItems = [{
			// 	title: 'Some title',
			// 	id: 1,
			// 	description: 'This is a book',
			// 	publishDate: '2016-01-25'
			// }, {
			// 	title: 'Title',
			// 	id: 2,
			// 	description: 'This is a book'
			// }, {
			// 	title: 'Tea',
			// 	id: 3,
			// 	description: 'This is a book'
			// }, {
			// 	title: 'Lite',
			// 	id: 4,
			// 	description: 'This is a book'
			// }];

			// $scope.title = 'Blog ' + $routeParams.id;
			// angular.forEach(blogItems, function(post) {
			// 	if (post.id === +$routeParams.id) {
			// 		$scope.notFound = false;
			// 		$scope.post = post;
			// 	}
			// });
		}
	});