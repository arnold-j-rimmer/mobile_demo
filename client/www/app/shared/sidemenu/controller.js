
ngApp.controller('sidemenuController', function($scope, $rootScope, $location){
	$rootScope.sidemenu_init = 0;
	$rootScope.sidemenu_open = 0;
	$rootScope.sidemenu_side = 'left';
	$rootScope.openSideMenu = function(side){
		$rootScope.sidemenu_open = 1;
		$rootScope.sidemenu_init = 0;
		$rootScope.sidemenu_side = side;
	}
	$rootScope.closeSideMenu = function() {
		$rootScope.sidemenu_open = 0;
		$rootScope.sidemenu_init = 0;
	}
	$rootScope.isActiveNav = function(viewLocation) {
		return viewLocation === $location.path();
	}
	$rootScope.callerOnLongPress = function() {
		$rootScope.sidemenu_init = 1;
	}
	$rootScope.callerOnTouchEnd = function() {
		$rootScope.sidemenu_init = 0;
	}
});

