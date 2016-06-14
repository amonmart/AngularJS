import { Pizza } from './pizza'
import { TOPPINGS_LIST } from './toppings-list'

export class PizzaController {
  constructor () {
    this.name = 'Pizza'
    this.toppings = TOPPINGS_LIST
  }

  savePizza (form) {
    var keys = Object.keys(this.toppings)
    console.log(keys)

    this.pizza.toppings = this.pizza.toppings
      .reduce((acc, v, i) => {
        if (v) acc.push(keys[i])
        return acc
      }, [])

    console.log('save', this.pizza.toppings)
  }
}

/*
angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
*/
