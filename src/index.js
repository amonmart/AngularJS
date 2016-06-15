import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'

angular.module('dtang', [
  PizzaModule,
  ngRoute
])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<h1>HOME</h1>',
      controller: function () {
      }
    })
    .when('/', {
      templateUrl: 'pizza-list.html',
      controller: 'PizzaListController',
      controllerAs: '$ctrl'
    })
    .when('/pizzas/:id', {
      templateUrl: 'pizza-form.html',
      controller: 'PizzaController',
      controllerAs: '$ctrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })

angular.bootstrap(document, ['dtang'])
