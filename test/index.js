var test = require('tape')
var magnetLink = require('../')
var child_process = require('child_process')

var url = 'http://torcache.net/torrent/EF330B39F4801D25B4245212E75A38634BFC856E.torrent'
var file = './test/test.torrent'
var result = 'magnet:?xt=urn:btih:ef330b39f4801d25b4245212e75a38634bfc856e'

test('convert url to magnet link', function (t) {
  magnetLink(url, function (err, link) {
    t.error(err, 'does not error')
    t.equal(link, result, 'expected output returned')
    t.end()
  })
})

test('convert url to magnet link (cli)', function (t) {
  t.plan(1)

  var cli = child_process.spawn('node', ['./bin/cli.js', url])

  cli.stderr.on('data', function (data) {
    t.error(data, 'does not error')
  })

  cli.stdout.on('data', function (data) {
    t.equal(data.toString().replace(/[\n\r]/g, ''), result, 'expected output returned')
  })
})

test('convert file to magnet link', function (t) {
  magnetLink(file, function (err, link) {
    t.error(err, 'does not error')
    t.equal(link, result, 'expected output returned')
    t.end()
  })
})

test('convert file to magnet link (cli)', function (t) {
  t.plan(1)

  var proc = child_process.exec('./bin/cli.js ' + file)

  proc.stderr.on('data', function (data) {
    t.error(data, 'does not error')
  })

  proc.stdout.on('data', function (data) {
    t.equal(data.toString().replace(/[\n\r]/g, ''), result, 'expected output returned')
  })
})

test('pipe torrent file contents to `magnet-link -` (cli)', function (t) {
  t.plan(1)

  var proc = child_process.exec('cat ' + file + ' | ./bin/cli.js -')

  proc.stderr.on('data', function (data) {
    t.error(data, 'does not error')
  })

  proc.stdout.on('data', function (data) {
    t.equal(data.toString().replace(/[\n\r]/g, ''), result, 'expected output returned')
  })
})
