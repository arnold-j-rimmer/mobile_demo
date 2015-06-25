
ngApp.controller('sidemenuController', ['$scope', function($scope, $sce){
	$scope.sidemenu_init = 0;
	$scope.sidemenu_open = 0;
	$scope.sidemenu_side = 'left';
	$scope.openSideMenu = function (side){
		$scope.sidemenu_open = 1;
		$scope.sidemenu_init = 0;
		$scope.sidemenu_side = side;
	}
	$scope.closeSideMenu = function () {
		$scope.sidemenu_open = 0;
		$scope.sidemenu_init = 0;
	}
	$scope.callerOnLongPress = function() {
		$scope.sidemenu_init = 1;
	}
	$scope.callerOnTouchEnd = function() {
		$scope.sidemenu_init = 0;
	}
}]);

