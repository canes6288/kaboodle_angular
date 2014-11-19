'use strict';

angular.module('kaboodleApp')
.controller('AllContestsCtrl', ['$scope', 'contestService',
                               function ($scope, contestService) {

  $scope.getContests = function() {
    // contestService.getAll().success(function(data) {
    //   $scope.contests = data;
    // }).error(function() {
    //   alert('something went wrong!');
    // });
    $scope.contests = contestService.contests;
  };

  $scope.selectContest = function(contest) {
    contestService.setSelectedContest(contest);
  };

  $scope.getContests();

}]);
