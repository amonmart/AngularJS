import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'
import NavbarModule from './navbar'

angular.module('dtang', [
  PizzaModule,
  NavbarModule,
  ngRoute
])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<h1>HOME</h1>',
      controller: function () {
      }
    })
    .when('/pizzas', {
      templateUrl: 'pizza-list.html',
      controller: 'PizzaListController',
      controllerAs: '$ctrl'
    })
    .when('/toppings', {
      templateUrl: 'toppings-list.html',
      controller: 'ToppingsController',
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
