app.controller('MainCtrl',  [
'$scope',
'posts',
function($scope, posts){
	$scope.test = 'Hello world!';

	$scope.posts = posts.posts;

    $scope.addPost = function() {
		if(!$scope.title || $scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
			
		});
		$scope.title='';
		$scope.link='';
		$scope.isLoggedIn = auth.isLoggedIn;
	};

	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	};

	$scope.decrementUpvotes = function(post) {
		posts.downvote(post);
	};


}]);