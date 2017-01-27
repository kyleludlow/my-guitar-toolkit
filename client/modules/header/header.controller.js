;(function () {
  'use strict'

  angular
    .module('app.header')
    .controller('HeaderController', HeaderController)

  HeaderController.$inject = ['config', 'logger', '$state']
  /* @ngInject */
  function HeaderController (config, logger, $state) {
    var vm = this
    activate()
    vm.location = 'Header'
    vm.routes = $state.get()

    function activate () {
    }
  }
})()
