
var ngApp = angular.module('ngApp',['ngRoute', 'ui.bootstrap', 'ngTouch']);

ngApp.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

ngApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './app/components/home/view.html',
			controller: 'homeController'
		})
		.when('/chat', {
			templateUrl: './app/components/chat/view.html',
			controller: 'chatController'
		})
		.when('/shop', {
			templateUrl: './app/components/shop/view.html',
			controller: 'shopController'
		})
		.when('shop/:itemId', {
			templateUrl: './app/components/shop/item.html',
			controller: 'shopItemController'
		})
		.when('/tickets', {
			templateUrl: './app/components/tickets/view.html',
			controller: 'ticketsController'
		})
		.otherwise({
			redirectTo: '/'
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
		$scope.closeSideMenu();
	});
}]);

