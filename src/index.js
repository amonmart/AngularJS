import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'
import NavbarModule from './navbar'
import PizzaClickerModule from './pizzaClicker'
import DtaDragDrop from './dta-DragDrop'

angular.module('dtang', [
  PizzaModule,
  NavbarModule,
  PizzaClickerModule,
  DtaDragDrop,
  ngRoute
])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
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
    .when('/clicker', {
      templateUrl: 'pizza-clicker-main.html'
    })
    .otherwise({
      redirectTo: '/home'
    })
  })

angular.bootstrap(document, ['dtang'])
