/**
 *
 */
angular.module('tasksList').directive('taskList', function(){
    return {
        restrict : 'E',
        templateUrl : "app/directives/task-list.html",
        controllerAs : "tasksCtrl"
    };
});