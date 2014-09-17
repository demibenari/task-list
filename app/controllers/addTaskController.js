/**
 * This controller is in charge of handling the Addition of new tasks to the DataService
 */

angular.module('tasksList').controller("AddTaskController", ['$scope','dataService', function($scope, dataService){
    // Saving the reference to the controller by a variable
    var addTaskCtrl = this;

    this.task = {}; // Place Holder for the entered task

    $scope.isAddTaskShown = false;

    addTaskCtrl.addTask = function() {
        // TODO: do validation on the fields before entering them into the Data Service

        dataService.addTask(addTaskCtrl.task);

        addTaskCtrl.clearTask();

        $scope.isAddTaskShown = false;
    };

    addTaskCtrl.clearTask = function() {
        this.task = {};
    };
}]);