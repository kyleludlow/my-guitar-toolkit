;(function () {
  'use strict'

  angular
    .module('app.tool', [])
    .controller('ToolController', ToolController)

  ToolController.$inject = ['$http', '$stateParams', 'ToolFactory', 'logger', '$location', '$sce', 'YoutubeFactory']
  /* @ngInject */
  function ToolController ($http, $stateParams, ToolFactory, logger, $location, $sce, YoutubeFactory) {
    var vm = this
    vm.title = 'System'
    vm.tool = {}
    vm.video = {}

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

    vm.list = function () {
      ToolFactory.get(function (success) {
        logger.log(success)
        vm.tools = success.tools
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
        vm.tool.href = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + vm.tool.videoID + '?rel=0')
      }, function (error) {
        logger.error(error.data.msg || error.data.message, error, 'Tool')
      })
    }

    vm.searchVideos = function (query) {
      return YoutubeFactory.searchVideos(query)
        .then(function (data) {
          logger.log(data)
          vm.video.searchVideos = data.data.items
          return vm.video.searchVideos
        })
    }

    vm.selectVideo = function (videoID) {
      var videoID = videoID || 'oRewopc1MwA'
      vm.video.href = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoID + '?rel=0')
    }

    function activate () {
      logger.info('Activated Tool View')
    }
  }
})()
