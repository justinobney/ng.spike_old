// Declare app level module which depends on filters, and services
angular.module('ng.spike')

   .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('layout1', {
                abstract: true,
                templateUrl: '/partials/layout_main.tmpl.html'
                // resolve: {
                //     auth: function(){
                //         return true;
                //     }
                // }
            })
            .state('layout1.home', {
                url: '/',
                //templateUrl: '/partials/home.tmpl.html'
                template: '<h1>Make template</h1>'
            });

        $urlRouterProvider.otherwise('/');
    });