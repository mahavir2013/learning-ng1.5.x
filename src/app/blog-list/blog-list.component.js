'use strict';

angular.module('blogList').
	component('blogList', {
		templateUrl: 'templates/blog-list.html',
		controller: function(Post, $location, $rootScope, $scope) {
			$scope.goToItem = function(post) {
				$rootScope.$apply(function() {
					$location.path('/blog/' + post.id);
				});
			};
			$scope.items = Post.query();
		}
	});