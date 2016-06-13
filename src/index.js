import angular from 'angular'

angular.module('dtang', [])
  .config(function () {
    console.log('Config coucou')
  })
  .value('AppName', 'DTANG')
  .run(function (AppName) {
    console.log(AppName + ' : Run coucou')
  })
  .controller('monControleur', monControleur)

angular.bootstrap(document, ['dtang'])

function monControleur () {
  const monCtrl = this
  monCtrl.page = '1'
  console.log('Mon controleur')


  monCtrl.click = function click (page) {
    monCtrl.page = page
  }
  monCtrl.message = 'Coucou : '

  monCtrl.user = {
    name: 'Antonin'
  }

  monCtrl.getName = function () {
    return monCtrl.user.name
  }
}
