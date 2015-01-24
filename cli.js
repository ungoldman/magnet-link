#!/usr/bin/env node

var magnetLink = require('./index.js');

if (!process.argv[2]) {
  console.error('usage: magnet-link torrent');
  process.exit(1);
}

magnetLink(process.argv[2], function(err, link) {

  if (!!err) {
    console.error(err);
    process.exit(1);
  }

  console.log(link);
});


