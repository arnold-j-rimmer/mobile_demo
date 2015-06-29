
ngApp.controller('newsController', function ($scope) {
	//$scope.switchInterval = 3000;
	var items = $scope.items = [
		{
			cat: 'quiz',
			source: 'News item #1 source',
			image: './assets/images/carousel/01.jpg',
			title: 'News Item #1 Title',
			body: 'News item #1 body...',
		},
		{
			cat: 'quiz',
			source: 'News item #2 source',
			image: './assets/images/carousel/02.jpg',
			title: 'News Item #2 Title',
			body: 'News item #2 body...',
		},
		{
			cat: 'quiz',
			source: 'News item #3 source',
			image: './assets/images/carousel/03.jpg',
			title: 'News Item #3 Title',
			body: 'News item #3 body...',
		},
		{
			cat: 'quiz',
			source: 'News item #4 source',
			image: './assets/images/carousel/04.jpg',
			title: 'News Item #4 Title',
			body: 'News item #4 body...',
		},
	];

	$scope.cat2glyph = {
		quiz: 'shopping-cart',
	}
});

