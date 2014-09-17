angular.module('tasksList').controller("TaskListController", ['$scope','dataService', function($scope, dataService){
    // Saving the reference to the controller by a variable
    var taskListCtrl = this;

    $scope.taskList = dataService.data;

    alert($scope.taskList);
//    taskListCtrl.list = dataService.data;
}]);