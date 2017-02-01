var db = require('../../db.js')
var _ = require('underscore')
var _str = require('underscore.string')

// GET ALL
exports.getTags = function (req, res) {
  db.tag.findAll().then(function (tags) {
    res.json({tags: tags})
  }, function (err) {
    res.status(500).send()
  })
}

// GET ONE
exports.getTagById = function (req, res) {
  var tagId = parseInt(req.params.id, 10)

  db.tag.findOne({
    where: {
      userId: req.user.get('id'),
      id: tagId
    }
  }).then(function (tag) {
    if (tag) {
      res.json(tag.toJSON())
    } else {
      res.status(404).send()
    }
  }, function (err) {
    res.status(500).send()
  })
}

// POST
exports.postTag = function (req, res) {
  var body = _.pick(req.body, 'name')
  body.title = _str.prune(body.title, 20)

  db.tool.create(body).then(function (tag) {
    req.user.addTool(tag).then(function () {
      return tool.reload()
    }).then(function (tag) {
      res.json(tag.toJSON())
    })
  }, function (err) {
    res.status(400).json(err)
  })
}

// DELETE
exports.deleteTag = function (req, res) {
  var tagId = parseInt(req.params.id, 10)

  db.tag.destroy({
    where: {
      userId: req.user.get('id'),
      id: tagId
    }
  }).then(function (rowsDeleted) {
    if (rowsDeleted === 0) {
      res.status(404).json({
        error: 'No tag with id'
      })
    } else {
      res.status(204).send()
    }
  }, function () {
    res.status(500).send()
  })
}

// UPDATE
exports.putTag = function (req, res) {
  var tagId = parseInt(req.params.id, 10)
  var body = _.pick(req.body, 'name')
  var attributes = {}

  if (body.hasOwnProperty('name')) {
    attributes.name = body.name
  }

  db.tool.findOne({
    where: {
      userId: req.user.get('id'),
      id: tagId
    }
  }).then(function (tag) {
    if (tag) {
      tool.update(attributes).then(function (tag) {
        res.json(tag.toJSON())
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
