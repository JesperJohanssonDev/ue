var UEWeb = angular.module('UEWeb', ['ngRoute']);

UEWeb .config(['$routeProvider',
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
        
            when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutController'
            }).
        
            when('/recruitment', {
                templateUrl: 'templates/recruitment.html',
                controller: 'RecruitmentController'
            }).
        
            when('/apply', {
                templateUrl: 'templates/apply.html',
                controller: 'ApplyController'
            }).
        
            when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            }).

            when('/qualifications', {
                templateUrl: 'templates/qualifications.html',
                controller: 'QualificationsController'
            }).

            otherwise({
                redirectTo: '/start'
            });
    }]);
