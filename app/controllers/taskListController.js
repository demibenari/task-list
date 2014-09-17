/**
 * This controller is in charge of handling the rendering the initial list of Tasks,
 * and the control of editing the clicked tasks.
 */

angular.module('tasksList').controller("TaskListController", ['$scope','dataService', function($scope, dataService){
    // Saving the reference to the controller by a variable
    // (I'm using this instead of "this" because inside the function this meant the function itself)
    var taskListCtrl = this;

    taskListCtrl.selectedTask = {}; // Place holder for the selected task

    $scope.isEditTaskShown = false;

    taskListCtrl.taskList = dataService.data;

    taskListCtrl.setSelectedItem = function(item) {
        $scope.isEditTaskShown = true;
        taskListCtrl.selectedTask = item;
        taskListCtrl.refreshData();
    };

    taskListCtrl.clearEditedTask = function() {
        taskListCtrl.selectedTask = {};
    };

    taskListCtrl.saveChangesOfTask = function() {
        // TODO: do validation on the fields before updating them into the Data Service

        $scope.isEditTaskShown = false;

        dataService.updateTask(taskListCtrl.selectedTask); // Invoking the update event that should pop when updating

        taskListCtrl.clearEditedTask();
    };

    taskListCtrl.refreshData = new function() {
        taskListCtrl.taskList = dataService.data;
    };

    // Event
    $scope.$on('listUpdated', function() {
        taskListCtrl.refreshData();
    });
}]);