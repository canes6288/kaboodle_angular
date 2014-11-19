'use strict';

angular.module('kaboodleApp')
.service('contestService', function($http) {

  var that = this;
  var allContestsUrl = '/allcontests';

  this.selectedContest = null;

  this.setSelectedContest = function(contest) {
    this.selectedContest = contest;
  };

  this.contests = [
    {
      id :  1,
      title : 'Red Bull\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    },
    {
      id :  2,
      title : 'Blue Egg\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    },
    {
      id :  3,
      title : 'Green Fish\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    },
    { id :  4,
      title : 'Purple Rhino\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    },
    {
      id :  5,
      title : 'Yellow Dog\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    },
    {
      id :  6,
      title : 'Black Cat\'s Piedmont Park Event',
      description : 'Red Bull gives you wings!',
      end_date : '11/22/2014',
      prize : 1000,
      company : 'Red Bull'
    }
  ];

});
