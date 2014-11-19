'use strict';

angular.module('kaboodleApp')
.controller('AddSubmissionCtrl', ['$scope', 'contestService',
                           function ($scope, contestService) {

  $scope.selectedContest = contestService.selectedContest;

}]);
