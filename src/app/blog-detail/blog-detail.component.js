'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: 'templates/blog-detail.html',
		controller: function(Post, $http, $location, $routeParams, $scope) {
			Post.query(function(data) {
				$scope.notFound = true;
				$scope.comments = [];
				angular.forEach(data, function(post) {
					if (post.id === +$routeParams.id) {
						$scope.notFound = false;
						$scope.post = post;

						if (post.comments) {
							$scope.comments = post.comments;
						}
						resetReply();
					}
				});
			});

			$scope.deleteComment = function(comment) {
				$scope.$apply(function() {
					$scope.comments.splice(comment, 1);
				});
			};

			$scope.addReply = function() {
				console.log($scope.comments);
				$scope.comments.push($scope.reply);
				resetReply();
			};
			
			function resetReply() {
				$scope.reply = {
					id: $scope.comments.length + 1,
					text: ''
				};
			};

			if ($scope.notFound) {
				console.log('Not found');
				// change location
				$location.path('/404');
			}
		}
	});