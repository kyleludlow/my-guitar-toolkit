var db = require('../../db.js')
var _ = require('underscore')
var _str = require('underscore.string')

// GET ALL
exports.getTools = function (req, res) {
  var query = req.query
  var where = {
    userId: req.user.get('id')
  }

  if (query.hasOwnProperty('completed') && query.completed === 'true') {
    where.completed = true
  } else if (query.hasOwnProperty('completed') && query.completed === 'false') {
    where.completed = false
  }

  if (query.hasOwnProperty('q') && query.q.length > 0) {
    where.videoID = {
      $like: `%${query.q}%`
    }
  }

  db.tool.findAll({where: where}).then(function (tools) {
    res.json({tools: tools})
  }, function (err) {
    res.status(500).send()
  })
}

// GET ONE
exports.getToolById = function (req, res) {
  var toolId = parseInt(req.params.id, 10)

  db.tool.findOne({
    where: {
      userId: req.user.get('id'),
      id: toolId
    }
  }).then(function (tool) {
    if (tool) {
      res.json(tool.toJSON())
    } else {
      res.status(404).send()
    }
  }, function (err) {
    res.status(500).send()
  })
}

// POST
exports.postTool = function (req, res) {
  var body = _.pick(req.body, 'videoID', 'completed')
  var test = _str.include(body.videoID, 'http')
  if (test) {
    var hrefString = body.videoID
    body.videoID = _str.strRight(hrefString, 'www.youtube.com/watch?v=')
  }
  db.tool.create(body).then(function (tool) {
    req.user.addTool(tool).then(function () {
      return tool.reload()
    }).then(function (tool) {
      res.json(tool.toJSON())
    })
  }, function (err) {
    res.status(400).json(err)
  })
}

// DELETE
exports.deleteTool = function (req, res) {
  var toolId = parseInt(req.params.id, 10)

  db.tool.destroy({
    where: {
      userId: req.user.get('id'),
      id: toolId
    }
  }).then(function (rowsDeleted) {
    if (rowsDeleted === 0) {
      res.status(404).json({
        error: 'No tool with id'
      })
    } else {
      res.status(204).send()
    }
  }, function () {
    res.status(500).send()
  })
}

// UPDATE
exports.putTool = function (req, res) {
  var toolId = parseInt(req.params.id, 10)
  var body = _.pick(req.body, 'videoID', 'completed')
  var attributes = {}

  if (body.hasOwnProperty('completed')) {
    attributes.completed = body.completed
  }

  if (body.hasOwnProperty('videoID')) {
    attributes.videoID = body.videoID
  }

  db.tool.findOne({
    where: {
      userId: req.user.get('id'),
      id: toolId
    }
  }).then(function (tool) {
    if (tool) {
      tool.update(attributes).then(function (tool) {
        res.json(tool.toJSON())
      }, function (err) {
        res.status(400).json(err)
      })
    } else {
      res.status(404).send()
    }
  }, function () {
    res.status(500).send()
  })
}
