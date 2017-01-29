;(function () {
  'use strict'

  angular
    .module('app.tool')
    .factory('ToolFactory', ToolFactory)

  ToolFactory.$inject = ['$resource']
  /* @ngInject */
  function ToolFactory ($resource) {
    return $resource('/todos/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    })
  }
}())
