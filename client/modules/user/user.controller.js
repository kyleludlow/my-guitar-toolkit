;(function () {
  'use strict'

  angular
    .module('app.user', [])
    .controller('UserController', UserController)

  UserController.$inject = ['$scope', '$http', 'config', '$state', '$timeout', 'UserFactory', 'logger', '$stateParams']

  /* @ngInject */
  function UserController ($scope, $http, config, $state, $timeout, UserFactory, logger, $stateParams) {
    var vm = this
    vm.loginCred = {}

    vm.login = function () {
      logger.warning(vm)
    }
    vm.signup = function () {
      logger.warning(vm.loginCred)
      UserFactory.signup(vm)
    }

    activate()

    function activate () {
    }
  }
})()
