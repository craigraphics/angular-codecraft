(function () {
   'use strict';

   /**
    * @ngdoc overview
    * @name codecraft
    * @description
    * # codecraft
    *
    * Main module of the application.
    */

   angular
     .module('codecraft', [
       'ngResource',
     	'infinite-scroll',
     	'angularSpinner',
     	'jcs-autoValidate',
     	'angular-ladda',
     	'mgcrea.ngStrap',
     	'toaster',
     	'ngAnimate',
     	'ui.router'
     ])
     .config(function ($stateProvider, $urlRouterProvider) {
     	$stateProvider
     		.state('list', {
     			url: '/',
     			views: {
     				'main': {
     					templateUrl: 'views/list.html',
     					controller: 'PersonListController',
              controllerAs: 'vm'
     				},
     				'search': {
     					templateUrl: 'views/searchform.html',
     					controller: 'PersonListController',
              controllerAs: 'vm'
     				}
     			}
     		})
     		.state('edit', {
     			url: '/edit/:email',
     			views: {
     				'main': {
     					templateUrl: 'views/edit.html',
     					controller: 'PersonDetailController',
              controllerAs: 'vm'
     				}
     			}
     		})
     		.state('create', {
     			url: '/create',
     			views: {
     				'main': {
     					templateUrl: 'views/edit.html',
     					controller: 'PersonCreateController',
              controllerAs: 'vm'
     				}
     			}
     		});

     	$urlRouterProvider.otherwise('/');
     })
     .config(function ($httpProvider, $resourceProvider, laddaProvider, $datepickerProvider) {
     	$httpProvider.defaults.headers.common['Authorization'] = 'Token 531d35d677729528b639d010d7e645587495b40b';
     	$resourceProvider.defaults.stripTrailingSlashes = false;
     	laddaProvider.setOption({
     		style: 'expand-right'
     	});
     	angular.extend($datepickerProvider.defaults, {
     		dateFormat: 'd/M/yyyy',
     		autoclose: true
     	});
     });

 })();
