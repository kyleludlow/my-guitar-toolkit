var tag = require('./tag.controller.js')

module.exports = function (app, middleware) {
  // GET
  app.get('/tags', middleware.requireAuthentication, tag.getTags)
  app.get('/tags/:id', middleware.requireAuthentication, tag.getTagById)

  // POST
  app.post('/tags', middleware.requireAuthentication, tag.postTag)

  // DELETE
  app.delete('/tags/:id', middleware.requireAuthentication, tag.deleteTag)

  // PUT
  app.put('/tags/:id', middleware.requireAuthentication, tag.putTag)
}
