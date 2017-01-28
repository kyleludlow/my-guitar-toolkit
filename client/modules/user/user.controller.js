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
      logger.log(vm.loginCred)
      UserFactory.login(vm)
    }
    vm.signup = function () {
      logger.log(vm.loginCred)
      UserFactory.signup(vm)
    }

    activate()

    function activate () {
    }
  }
})()
