/**
 *
 */

angular.module('tasksList').controller("AddTaskController", ['$scope', function($scope){
    // Saving the reference to the controller by a variable
//    var addTaskController = this;
//    addTaskController.list = dataService.data;


    // Saving the reference to the controller by a variable
    var addTaskCtrl = this;

    this.task = {};

    $scope.isAddTaskShown = false;

    addTaskCtrl.addTask = function() {
       // alert(addTaskCtrl.task.name + " " + addTaskCtrl.task.assignee + " " + addTaskCtrl.task.description + " " + addTaskCtrl.task.date);
        alert( $scope.taskList);
        $scope.taskList.push(addTaskCtrl.task);
    };

    addTaskCtrl.clearTask = function() {
        this.task = {};
    };
}]);