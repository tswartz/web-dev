var app = angular.module("DefaultApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'pages/home.html'
    }).
    when('/assignments', {
        templateUrl: 'pages/assignments.html',
        controller: 'AssignmentsCtrl'
    }).
    when('/project', {
        templateUrl: 'pages/project.html'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);