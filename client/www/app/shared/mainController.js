
var ngApp = angular.module('ngApp',['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngTouch', 'btford.socket-io']);
/*
ngApp.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);
*/
ngApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/components/home/view.html',
			controller: 'homeController'
		})
		.when('/chat', {
			templateUrl: 'app/components/chat/view.html',
			controller: 'chatController'
		})
		.when('/shop', {
			templateUrl: 'app/components/shop/view.html',
			controller: 'shopController'
		})
		.when('/shop/:itemId', {
			templateUrl: 'app/components/shop/item.html',
			controller: 'shopItemController'
		})
		.when('/tickets', {
			templateUrl: 'app/components/tickets/view.html',
			controller: 'ticketsController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

ngApp.controller('mainController', ['$scope', '$rootScope', '$sce', function($scope, $rootScope, $sce){
	$scope.dom_loading = 1;
	$scope.include_loading = 1;
	$scope.route_loading = 0;
	$scope.client = 'open kinetix';
	$scope.currentDateObject = new Date();

	angular.element(document).ready(function () {
		$scope.dom_loading = 0;
    });

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

  // define news
	var newsList = [{
      'image': 'http://static.reviersport.de/include/images/articles/medium/000/307/743.jpeg',
			'title': 'BSV Schüren: Njambe-Deal geplatzt',
      'text' : 'Vor zwei Wochen präsentierte der BSV Schüren zwei echte Transferkracher.'
    }, {
			'image': 'http://static.reviersport.de/include/images/articles/medium/000/307/519.jpeg',
			'title': 'Zorc zu Gündogan-Poker: "Hochanständig verhalten"',
			'text' : 'Sportdirektor Michael Zorc sieht gute Voraussetzungen für weitere Verhandlungen mit Fußball-Nationalspieler Ilkay Gündogan über eine Vertragsverlängerung bei Borussia Dortmund.'
    }, {
			'image': 'http://static.reviersport.de/include/images/articles/medium/000/307/670.jpeg',
			'title': 'BVB will Kader verkleinern',
			'text' : 'Borussia Dortmund plant eine Verkleinerung des Kaders. "Da wird sich in der nächsten Woche noch was tun", bestätigte Sportdirektor Michael Zorc dem Fachmagazin "Kicker".'
    }, {
			'image': 'http://static.reviersport.de/include/images/articles/medium/000/307/739.jpeg',
			'title': 'Lüner SV: Der BVB II kommt',
			'text' : 'Der Lüner SV darf sich über ein Testspiel gegen Borussia Dortmund II freuen.'
    }];

	$rootScope.newsList = newsList;

	// define events
	var eventList = [
		{
			cat: 'quiz',
			source: 'News item #1 source',
			image: 'https://app.arenoo.com/api/uploads/image/member/profile_190.jpg',
			title: 'Igor Kostic',
			body: 'Answered 3 questions correctly. Also take the quiz.',
		},
		{
			cat: 'tip',
			source: 'News item #2 source',
			image: 'http://static.tumblr.com/iawq2rw/DWEn7ymmy/bvbcrst.png',
			title: 'Borrusia Dortmund',
			body: 'Your tip was right Borrusia Dortmund won 4:3 Check the tip results',
		},
		{
			cat: 'shop',
			source: 'News item #3 source',
			image: 'http://2.bp.blogspot.com/_c9N4kbyDEpc/THa8lxSWppI/AAAAAAAAAHY/PLMLPPGp6hA/s1600/2010-11-Manchester-United-Football-Club-Official-Home-Mens-Football-Jersey-382469_623_A.png',
			title: 'Manchester United FC',
			body: 'Nike Manchester United FC Trikot 14/15, for &euro; 75.99 Check your discount',
		},
		{
			cat: 'checkin-stadium',
			source: 'News item #4 source',
			image: 'http://www.stadiumguide.com/wp-content/gallery/oldtrafford/oldtrafford8.jpg',
			title: 'Djordje Ilic',
			body: 'Checked in at Old Traford',
		},
	];

	$rootScope.eventList = eventList;
}]);

ngApp.factory('socket', ['socketFactory', function (socketFactory) {
  var socket = socketFactory({
    ioSocket: io.connect('http://localhost:3000')
  });
	socket.forward('broadcast');
  return socket;
}]);
