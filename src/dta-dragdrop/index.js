import angular from 'angular'
import { DtaDragDirective } from './drag.directive'
import { DtaDropDirective } from './drop.directive'

export default

  angular.module('dtang.dtaDragDrop', [])
    .directive('dtaDrag', DtaDragDirective)
    .directive('dtaDrop', DtaDropDirective)
    .name
