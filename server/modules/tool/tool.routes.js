var tool = require('./tool.controller.js')

module.exports = function (app, middleware) {
  // GET
  app.get('/tools', middleware.requireAuthentication, tool.getTools)
  app.get('/tools/:id', middleware.requireAuthentication, tool.getToolById)

  // POST
  app.post('/tools', middleware.requireAuthentication, tool.postTool)

  // DELETE
  app.delete('/tools/:id', middleware.requireAuthentication, tool.deleteTool)

  // PUT
  app.put('/tools/:id', middleware.requireAuthentication, tool.putTool)
}
