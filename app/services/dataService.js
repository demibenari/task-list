/**
* Getting the angular instance and registering the data services to it
* This service would be injected to any Entity that needs it in the application
*
* Should be replaced with some kind of access to a data service (Like a DataBase of some kind)
* */

angular.module('tasksList').service('dataService', function($rootScope) {

// Reading the file from even though i got it into the HTML was not possible this way,
// There is the possibilty to use the local storage of HTML5 but it is still not like was asked in the exercise

//    var data = JSON.parse('../data/assignments.json');

    var data = [
        {
            name: 'Task 1',
            assignee: 'Demi',
            description: 'description 1',
            dueDate: '15/09/14',
            complete: true
        },
        {
            name: 'Task 2',
            assignee: 'Shani',
            description: 'description 2',
            dueDate: '16/09/14',
            complete: false
        },
        {
            name: 'Task 3',
            assignee: 'Roi',
            description: 'description 3',
            dueDate: '17/09/14',
            complete: false
        }
    ];

    var addTask = function(task) {
        data.push(task);
        $rootScope.$broadcast("listUpdated");
    };

    var updateTask = function(task) {
        data[task] = task;
        $rootScope.$broadcast("listUpdated");
    };

    return {
        'data' : data,
        'addTask' : addTask,
        'updateTask' : updateTask
    };
});