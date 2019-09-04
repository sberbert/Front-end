var MyApp = angular.module("MyApp",[]);

MyApp.controller("firstController",["$scope","NameService",function($scope, NameService){
  $scope.name = "Simone";     
  NameService.save($scope.name);
}]);


MyApp.service("NameService", function(){
  this.save = function(name){
      console.log(name)
  }    
});
