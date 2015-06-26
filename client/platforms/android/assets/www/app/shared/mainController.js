
var ngApp = angular.module('ngApp',['ngRoute', 'ui.bootstrap', 'ngTouch']);

ngApp.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

ngApp.controller('mainController', ['$scope', function($scope, $sce){
	$scope.include_loading = 1;
	$scope.route_loading = 0;
	$scope.client = 'open kinetix';
	$scope.currentDateObject = new Date();

	/*angular.element(document).ready(function () {
        $scope.app_loading = 0;
    });*/

	$scope.$on('$includeContentRequested', function(event) {
		$scope.include_loading = 1;
    });

	$scope.$on('$includeContentLoaded', function(event) {
		$scope.include_loading = 0;
    });

	// Needed for the loading screen
	$scope.$on('$routeChangeStart', function(){
		$scope.route_loading = 1;
	});

	$scope.$on('$routeChangeSuccess', function(){
		$scope.route_loading = 0;
	});
}]);

