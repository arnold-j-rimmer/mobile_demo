
ngApp.controller('chatController', ['$scope', 'socket', function($scope, socket){
  $scope.sendMessage = function() {
    socket.emit('message', $scope.chatMessage);
    $scope.chatMessage = '';
  }
  $scope.$on('socket:broadcast', function(event, data) {
    console.log(data);
    angular.element( document.querySelector( '#messages' ) ).append('<li>' + data + '</li>')
  });
}]);
