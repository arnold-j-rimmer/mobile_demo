
ngApp.controller('chatController', ['$scope', 'socket', function($scope, socket){
  $scope.sendMessage = function() {
    socket.emit('message', $scope.userName);
  }
  $scope.$on('socket:broadcast', function(event, data) {
    console.log(data);
  });
}]);
