;(function () {
  'use strict'

  angular
    .module('app.tool', [])
    .controller('ToolController', ToolController)

  ToolController.$inject = ['$http', '$stateParams', 'ToolFactory', 'logger', '$location', '$sce', 'UserFactory']
  /* @ngInject */
  function ToolController ($http, $stateParams, ToolFactory, logger, $location, $sce, UserFactory) {
    var vm = this
    vm.title = 'System'
    vm.tool = {}
    vm.UserFactory = UserFactory

    activate()

    vm.create = function () {
      var tool = new ToolFactory(vm.tool)
      tool.$save(function (response) {
        logger.info(response)
        // $location.url('/tool/list')
      }, function (error) {
        logger.error(error.data.msg || error.data.message, error, 'Tool')
      })
    }

    vm.list = function () {
      ToolFactory.get(function (success) {
        logger.log(success)
        vm.tools = success.todos
      }, function (error) {
        logger.error(error.data.msg || error.data.message, error, 'Tool')
      })
    }

    vm.find = function () {
      ToolFactory.get({
        id: $stateParams.id
      }, function (success) {
        vm.tool = success

        logger.log(success)
        vm.tool.href = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + vm.tool.description + '?rel=0')
      }, function (error) {
        logger.error(error.data.msg || error.data.message, error, 'Tool')
      })
    }

    function activate () {
      logger.info('Activated Tool View')
    }
  }
})()
