/**
 *
 */

angular.module('tasksList').controller("AddTaskController", ['$scope','dataService', function($scope,dataService){
    // Saving the reference to the controller by a variable
    var addTaskCtrl = this;

    this.task = {};

    $scope.isAddTaskShown = false;

    addTaskCtrl.addTask = function() {
        // TODO: do validation on the fields

        dataService.addTask(addTaskCtrl.task);

        addTaskCtrl.clearTask();

        $scope.isAddTaskShown = false;
    };

    addTaskCtrl.clearTask = function() {
        this.task = {};
    };
}]);