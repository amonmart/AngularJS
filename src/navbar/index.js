import angular from 'angular'
import { NavbarController } from './navbar.controller'

export default

  angular.module('dtang.navbar', [])
    .controller('NavbarController', NavbarController)
    .name