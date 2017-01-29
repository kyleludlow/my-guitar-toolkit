;(function () {
  'use strict'

  angular
    .module('app.tool', [])
    .controller('ToolController', ToolController)

  ToolController.$inject = ['$http', '$stateParams', 'ToolFactory', 'logger', '$location', 'UserFactory']
  /* @ngInject */
  function ToolController ($http, $stateParams, ToolFactory, logger, $location, UserFactory) {
    var vm = this
    vm.title = 'System'
    vm.tool = {}
    vm.UserFactory = UserFactory

    activate()

    vm.create = function () {

      var tool = new ToolFactory(vm.tool)
      tool.$save(function (response) {
        logger.info(response)
        //$location.url('/tool/list')
      }, function (error) {
        logger.error(error.data.msg || error.data.message, error, 'Tool')
      })
    }

    function activate () {
      logger.info('Activated Tool View')
    }
  }
})()
