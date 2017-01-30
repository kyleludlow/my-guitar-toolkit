;(function () {
  'use strict'

  angular
    .module('app.tool')
    .factory('ToolFactory', ToolFactory)
    .factory('YoutubeFactory', YoutubeFactory)

  ToolFactory.$inject = ['$resource']
  /* @ngInject */
  function ToolFactory ($resource) {
    return $resource('/tools/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    })
  }

  YoutubeFactory.$inject = ['$http', 'logger']
    /* @ngInject */

  function YoutubeFactory ($http, logger) {
    return {
      searchVideos: searchVideos
    }

    function searchVideos (query) {
      var query = query || 'guitar'
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        skipAuthorization: true,
        params: {
          key: 'AIzaSyBbLjQRVRAUgYP6UCba2CXBMo5LeCqfjUg',
          type: 'video',
          maxResults: '10',
          part: 'id,snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description, items / snippet / thumbnails /default, items / snippet / channelTitle, nextPageToken',
          q: query
        }
      }).then(function (response) {
        return response
      })
      .catch(function (err) {
        logger.error(err)
      })
    }
  }
}())
