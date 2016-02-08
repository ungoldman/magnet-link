var readTorrent = require('read-torrent')

function magnetLink (location, callback) {
  readTorrent(location, function (err, torrent) {
    if (err) return callback(err)
    fromTorrentObject(torrent, callback)
  })
}

function fromTorrentObject (torrent, callback) {
  if (!torrent.infoHash) return callback(new Error('Missing info hash'))
  callback(null, 'magnet:?xt=urn:btih:' + torrent.infoHash)
}

magnetLink.fromTorrentObject = fromTorrentObject
module.exports = magnetLink
