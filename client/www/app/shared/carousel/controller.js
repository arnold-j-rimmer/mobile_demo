
ngApp.controller('carouselController', function ($scope, $rootScope) {
	$scope.switchInterval = 3000;
	$scope.slides = $rootScope.newsList;
});
