angular.module('SACMobileApp', [
  'ngRoute',
  'mobile-angular-ui',
  'SACMobileApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});