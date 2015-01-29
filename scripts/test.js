process.chdir(__dirname)

var test = require('tape')
var magnetLink = require('..')
var exec = require('child_process').exec

var url = 'http://torcache.net/torrent/EF330B39F4801D25B4245212E75A38634BFC856E.torrent'
var file = './test.torrent'
var result = 'magnet:?xt=urn:btih:ef330b39f4801d25b4245212e75a38634bfc856e'

test('convert url to magnet link', function (t) {
  magnetLink(url, function (err, link) {
    if (err) { throw err }
    t.equal(link, result)
    t.end()
  })
})

test('convert url to magnet link (cli)', function (t) {
  exec('node ../bin/cli.js ' + url, function (err, stdout, stderr) {
    if (err) throw err
    if (stderr) throw new Error(stderr)
    t.equal(stdout.replace(/[\n\r]/g, ''), result)
    t.end()
  })
})

test('convert file to magnet link', function (t) {
  magnetLink(file, function (err, link) {
    if (err) { throw err }
    t.equal(link, result)
    t.end()
  })
})

test('convert file to magnet link (cli)', function (t) {
  exec('node ../bin/cli.js ' + file, function (err, stdout, stderr) {
    if (err) throw err
    if (stderr) throw new Error(stderr)
    t.equal(stdout.replace(/[\n\r]/g, ''), result)
    t.end()
  })
})
