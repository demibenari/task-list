/**
 *
 */

angular.module('tasksList').controller("AddTaskController", ['$scope', function($scope){
    // Saving the reference to the controller by a variable
    var addTaskController = this;
    addTaskController.list = dataService.data;
}]);