;(function () {
  'use strict'

  angular
    .module('app.user')
    .run(appRun)

  appRun.$inject = ['routerHelper']
  /* @ngInject */
  function appRun (routerHelper) {
    routerHelper.configureStates(getStates())
  }

  function getStates () {
    return [
      {
        state: 'signin',
        config: {
          url: '/signin',
          templateUrl: 'modules/user/signin.view.html',
          controller: 'UserController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'signup',
        config: {
          url: '/signup',
          templateUrl: 'modules/user/signup.view.html',
          controller: 'UserController',
          controllerAs: 'vm'
        }
      }
    ]
  }
})()
