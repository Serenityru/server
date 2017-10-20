/**
 * Created by Serenity on 2017/10/19.
 */
//var app = angular.module('myApp', ['ui.router']);
//app.config(function($stateProvider) {
//    $stateProvider
//        .state('server',{
//            url: '/server',
//            templateUrl: ''
//        })
//});
var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider
        .state('server',{
            url: '/server',
            templateUrl: 'App/View/server.html'
        })
        .state('ad',{
            url: '/ad',
            templateUrl: 'App/View/ad.html'
        })
});