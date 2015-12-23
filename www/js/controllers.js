angular.module('starter.controllers', ['ionic'])

.controller("TabsCtrl", function($scope) {

})
.controller("PrgsCtrl", function($scope) {

})
.controller("RoutCtrl", function($scope) {

  $scope.routines = [
    {
      "title": "bench press",
      "description": "5 x 5"
    },
    {
      "title": "pull ups",
      "description": "5 x 5"
    },
    {
      "title": "dead lifts",
      "description": "5 x 5"
    }
  ];
})

.controller("TimeCtrl", function($scope) {
  $scope.seconds = 0;

});
