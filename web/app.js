var WebAppIncruit = angular.module('WebAppIncruit', ['ngRoute']);

WebAppIncruit .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).

            when('/logout', {
                templateUrl: 'templates/logout.html',
                controller: 'LogoutController'
            }).

            when('/start', {
                templateUrl: 'templates/start.html',
                controller: 'StartController'
            }).

            when('/qualifications', {
                templateUrl: 'templates/qualifications.html',
                controller: 'QualificationsController'
            }).

            otherwise({
                redirectTo: '/start'
            });
    }]);
