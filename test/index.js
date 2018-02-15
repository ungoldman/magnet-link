var test = require('tape')
var magnetLink = require('../')
var childProcess = require('child_process')

var url = 'https://webtorrent.io/torrents/sintel.torrent'
var file = './test/sintel.torrent'
var result = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10'

test('convert url to magnet link', function (t) {
  magnetLink(url, function (err, link) {
    t.error(err, 'does not error')
    t.equal(link, result, 'expected output returned')
    t.end()
  })
})

test('convert url to magnet link (cli)', function (t) {
  t.plan(1)

  var cli = childProcess.spawn('node', ['./bin/cli.js', url])

  cli.stderr.on('data', function (data) {
    t.error(data, 'does not error')
    console.log(data.toString())
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

  var proc = childProcess.exec('./bin/cli.js ' + file)

  proc.stderr.on('data', function (data) {
    t.error(data, 'does not error')
  })

  proc.stdout.on('data', function (data) {
    t.equal(data.toString().replace(/[\n\r]/g, ''), result, 'expected output returned')
  })
})

test('pipe torrent file contents to `magnet-link` (cli)', function (t) {
  t.plan(1)

  var proc = childProcess.exec('cat ' + file + ' | ./bin/cli.js -')

  proc.stderr.on('data', function (data) {
    t.error(data, 'does not error')
  })

  proc.stdout.on('data', function (data) {
    t.equal(data.toString().replace(/[\n\r]/g, ''), result, 'expected output returned')
  })
})
