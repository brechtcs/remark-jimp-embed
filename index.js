var Jimp = require('jimp')
var parallel = require('run-parallel')
var visit = require('unist-util-visit')

module.exports = function (fn) {
  var edit = fn || function (img) {
    return img
  }

  return function (tree, file, done) {
    var tasks = []
    visit(tree, 'image', function (node) {
      tasks.push(transform(node))
    })
    parallel(tasks, function (err) {
      done(err)
    })
  }

  function transform (node) {
    return async function (cb) {
      try {
        var img = await edit(await Jimp.read(node.url))
        node.url = await img.getBase64Async(Jimp.AUTO)
        cb()
      } catch (err) {
        return cb(err)
      }
    }
  }
}
