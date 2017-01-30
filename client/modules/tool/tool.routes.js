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
      },
      {
        state: 'list',
        config: {
          url: '/tool/list',
          templateUrl: 'modules/tool/list.view.html',
          controller: 'ToolController',
          controllerAs: 'vm',
        }
      },
      {
        state: 'view',
        config: {
          url: '/view/:id',
          templateUrl: 'modules/tool/view.view.html',
          controller: 'ToolController',
          controllerAs: 'vm',
        }
      },
      {
        state: 'search',
        config: {
          url: '/tool/search',
          templateUrl: 'modules/tool/search.view.html',
          controller: 'ToolController',
          controllerAs: 'vm'
        }
      }
    ]
  }
})()
