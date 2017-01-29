;(function () {
  'use strict'

  angular
    .module('app.tool')
    .run(appRun)

  appRun.$inject = ['routerHelper']
  /* @ngInject */
  function appRun (routerHelper) {
    routerHelper.configureStates(getStates())
  }

  function getStates () {
    return [
      {
        state: 'create',
        config: {
          url: '/tool/create',
          templateUrl: 'modules/tool/create.view.html',
          controller: 'ToolController',
          controllerAs: 'vm',
        }
      }
    ]
  }
})()
