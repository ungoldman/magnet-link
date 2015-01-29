var test = require('tape')
var magnetLink = require('../')
var url = 'http://torcache.net/torrent/EF330B39F4801D25B4245212E75A38634BFC856E.torrent'

test('convert url to magnet link', function (t) {
  magnetLink(url, function (err, link) {
    if (err) { throw err }
    t.equal(link, 'magnet:?xt=urn:btih:ef330b39f4801d25b4245212e75a38634bfc856e')
    t.end()
  })
})
