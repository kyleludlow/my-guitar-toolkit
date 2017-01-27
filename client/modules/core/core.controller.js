;(function () {
  'use strict'

  angular
    .module('app.core')
    .controller('CoreController', LayoutController)

  LayoutController.$inject = ['logger']
  /* @ngInject */
  function LayoutController (logger) {
    var vm = this
    vm.message = 'layout'
    activate()

    function activate () {
    }
  }
})()
