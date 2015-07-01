
ngApp.controller('newsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.items = $rootScope.eventList;

	$scope.cat2glyph = {
		quiz: 'shopping-cart',
	}
}]);
