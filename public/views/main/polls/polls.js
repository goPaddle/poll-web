angular.module('pollApp')
	.controller('PollsCtrl', function($scope, $state, Poll) {
		$scope.polls = Poll.query();
		$scope.open_poll = function (id) {
			$state.go('main.show_poll', {id: id});
		};
		$scope.deletePoll = function(id){
          Poll.delete({ id: id }, function(response) {
            $scope.polls = Poll.query();
          });
  };
	});
