'use strict';

angular.module('kaboodleApp')
.controller('ContestCtrl', ["$scope", "contestService",
                           function ($scope, contestService) {

 $scope.selectedContest = contestService.selectedContest;

}]);
