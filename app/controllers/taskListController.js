angular.module('tasksList').controller("TaskListController", ['$scope','dataService', function($scope, dataService){
    // Saving the reference to the controller by a variable
    var taskListCtrl = this;

    var editedTaskIndex = -1;
    var selectedTask = {};

    $scope.isEditTaskShown = false;

    this.taskList = dataService.data;

    taskListCtrl.setSelectedItem = function(index) {
        editedTaskIndex = index;
        $scope.isEditTaskShown = true;

        selectedTask = dataService.data[index];
    };

    taskListCtrl.clearEditedTask = function() {
        editedTaskIndex = -1;
        selectedTask = {};
    };

    taskListCtrl.saveChangesOfTask = function() {
        $scope.isEditTaskShown = false;

        dataService.data[editedTaskIndex] = selectedTask;

        taskListCtrl.clearEditedTask();
    };

    taskListCtrl.refreshData = new function() {
        taskListCtrl.taskList = dataService.data;
    };

    $scope.$on('listUpdated', function() {
        taskListCtrl.refreshData();
    });

}]);