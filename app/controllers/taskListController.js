angular.module('tasksList').controller("TaskListController", ['$scope','dataService', function($scope, dataService){
    // Saving the reference to the controller by a variable
    var taskListCtrl = this;

    taskListCtrl.selectedTask = {};

    $scope.isEditTaskShown = false;

    this.taskList = dataService.data;

    taskListCtrl.setSelectedItem = function(item) {
        $scope.isEditTaskShown = true;
        taskListCtrl.selectedTask = item;
        taskListCtrl.refreshData();
    };

    taskListCtrl.clearEditedTask = function() {
        taskListCtrl.selectedTask = {};
    };

    taskListCtrl.saveChangesOfTask = function() {
        $scope.isEditTaskShown = false;

//        dataService.data[taskListCtrl.editedTaskIndex] = taskListCtrl.selectedTask;
        dataService.updateTask(taskListCtrl.selectedTask); // Invoking the update event that should pop when updating

        taskListCtrl.clearEditedTask();
    };

    taskListCtrl.refreshData = new function() {
        taskListCtrl.taskList = dataService.data;
    };

    $scope.$on('listUpdated', function() {
        taskListCtrl.refreshData();
    });

}]);