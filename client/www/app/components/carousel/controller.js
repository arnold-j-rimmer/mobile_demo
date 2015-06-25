
ngApp.controller('carouselController', function ($scope) {
	$scope.switchInterval = 3000;
	var slides = $scope.slides = [];
	$scope.addSlide = function() {
		var newIndex = slides.length + 1;
		slides.push({
			image: './assets/images/carousel/0' + newIndex + '.jpg',
			text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		});
	};
	/*angular.element(document).ready(function () {
        for (var i = 0; i < 4; i++){
			$scope.addSlide();
		}
    });*/
	for (var i = 0; i < 4; i++){
		$scope.addSlide();
	}
});

