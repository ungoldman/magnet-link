#!/usr/bin/env node

var magnetLink = require('../')
var concat = require('concat-stream')
var parseTorrent = require('parse-torrent')
var argv = process.argv.slice(2)

if (argv[0] !== '-') handleArgs()
else handlePipes()

function handleArgs () {
  if (!process.argv[2]) {
    console.error('usage: magnet-link torrent')
    process.exit(1)
  }

  magnetLink(process.argv[2], handler)
}

function handlePipes () {
  process.stdin.pipe(concat(function (buffer) {
    try {
      var torrent = parseTorrent(buffer)
    } catch (e) {
      return console.error(e)
    }

    magnetLink.fromTorrentObject(torrent, handler)
  }))
}

function handler (err, link) {
  if (err) {
    console.error(err.message, err)
    process.exit(1)
  }

  console.log(link)
}
