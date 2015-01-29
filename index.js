var readTorrent = require('read-torrent')

module.exports = function (torrent, callback) {
  readTorrent(torrent, function (err, torrent) {
    if (err) return callback(err)
    if (!torrent.infoHash) return callback(new Error('Missing info hash'))

    callback(null, 'magnet:?xt=urn:btih:' + torrent.infoHash)
  })
}
