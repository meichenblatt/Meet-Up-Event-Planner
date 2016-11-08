var EventApp = angular.module('EventApp', ['ngRoute']);

EventApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
		.when('/', {
		    controller:  'eventsController',
		    templateUrl: 'tmpl/events.html'
		})
        .when('/newevent', {
            controller:  'neweventController',
            templateUrl: 'tmpl/newevent.html'
        })
		.when('/newuser', {
		    controller:  'newuserController',
		    templateUrl: 'tmpl/newuser.html'
		})
		.otherwise({
		    redirect: '/'
		});
    $locationProvider.html5Mode(true);
});
