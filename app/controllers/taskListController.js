angular.module('tasksList').controller("TaskListController", ['dataService', function(dataService){
    // Saving the reference to the controller by a variable
    var taskListCtrl = this;

    taskListCtrl.list = dataService.data;
}]);