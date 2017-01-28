;(function () {
  'use strict'

  angular
    .module('app.user')
    .factory('UserFactory', UserFactory)

  UserFactory.$inject = ['$rootScope', '$http', '$location', '$stateParams', '$q', '$timeout', 'logger', 'jwtHelper', '$state']

  /* @ngInject */
  function UserFactory ($rootScope, $http, $location, $stateParams, $q, $timeout, logger, jwtHelper, $state) {
    var self
    var UserFactory = new UserClass()

    function UserClass () {
      this.name = 'users'
    }

    UserClass.prototype.login = function (vm) {
      $http.post('/users/login', {
        email: vm.loginCred.email,
        password: vm.loginCred.password
      }).then(function (success) {
        logger.log(success)
      }, function (err) {
        logger.error(err)
      })
    }

    UserClass.prototype.signup = function (vm) {
      $http.post('/users', {
        email: vm.loginCred.email,
        password: vm.loginCred.password
      }).then(function (success) {
        logger.log(success)
      }, function (err) {
        logger.error(err)
      })
    }

    return UserFactory
  }
}())
