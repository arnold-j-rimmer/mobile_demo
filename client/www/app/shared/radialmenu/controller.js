
ngApp.controller('radialmenuController', ['$scope', function($scope, $sce){
	$scope.$on('$includeContentLoaded', function(event) {
		var el = angular.element, sel = document.querySelector;
		var holder = angular.element(document.querySelector('#radialmenu'));
		var bd = angular.element(document.querySelector('#navs_backdrop'));
		var ul = angular.element(document.querySelector('#navs')), li = ul.children(), i = li.length, n = i - 1, r = 100;
		ul.bind('click', function() {
			//angular.element(this).toggleClass('active');
			holder.toggleClass('active');
			if (holder.hasClass('active')){
				for (var a = 0; a < i; a++){
					li.eq(a).css({
						'transition-delay': '' + (40 * a) + 'ms',
						'-webkit-transition-delay': '' + (40 * a) + 'ms',
						'left': (-r * Math.cos(180 / n * a * (Math.PI / 180))) + 'px',
						'top': (-r * Math.sin(180 / n * a * (Math.PI / 180))) - 20 + 'px'	
					});
				}
			}else{
				li.removeAttr('style');
			}
		});
		bd.bind('click', function() {
			holder.toggleClass('active');
			li.removeAttr('style');
		});
    });
}]);

