;(function () {
  'use strict'

  var util = angular.module('app.core')
  util.config(interceptors)

  interceptors.$inject = ['$httpProvider', 'jwtInterceptorProvider']
  /* @ngInject */
  function interceptors ($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = function () {
      return localStorage.getItem('Auth')
    }

    $httpProvider.interceptors.push('jwtInterceptor')
  }
})()
