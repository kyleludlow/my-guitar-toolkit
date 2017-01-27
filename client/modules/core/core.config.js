;(function () {
  'use strict'

  var core = angular.module('app.core')

  core.config(toastrConfig)
  core.constant('toastr', toastr)

  toastrConfig.$inject = ['toastr']
  /* @ngInject */
  function toastrConfig (toastr) {
    toastr.options.timeOut = 4000
    toastr.options.positionClass = 'toast-bottom-right'
  }

  /*  $window change out */
  var config = {
    appErrorPrefix: window.name,
    appTitle: window.name
  }
  core.value('config', config)

  core.config(configure)

  configure.$inject = ['$logProvider', 'routerHelperProvider']
  /* @ngInject */
  function configure ($logProvider, routerHelperProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true)
    }
  }
})()
