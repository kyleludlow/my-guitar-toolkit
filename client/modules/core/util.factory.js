;(function () {
  'use strict'

  angular
    .module('app.core')
    .factory('logger', logger)

  logger.$inject = ['$log', 'toastr']
  /* @ngInject */
  function logger ($log, toastr) {
    var service = {
      showToasts: true,
      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log // straight to console; bypass toastr
    }

    return service

    function error (message, data, title) {
      if (message)toastr.error(message, title)
      $log.error('Error: ' + message, data)
    }

    function info (message, data, title) {
      if (message)toastr.info(message, title)
      $log.info('Info: ' + message, data)
    }

    function success (message, data, title) {
      if (message)toastr.success(message, title)
      $log.info('Success: ' + message, data)
    }

    function warning (message, data, title) {
      if (message)toastr.warning(message, title)
      $log.warn('Warning: ' + message, data)
    }
  }
})()
