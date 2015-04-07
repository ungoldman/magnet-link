# magnet-link

[![](https://img.shields.io/npm/v/magnet-link.svg?style=flat-square)](https://www.npmjs.com/package/magnet-link)
[![](https://img.shields.io/travis/ngoldman/magnet-link.svg?style=flat-square)](https://travis-ci.org/ngoldman/magnet-link)

Get a magnet from a torrent file.

```
npm install magnet-link
```

## Usage

```js
var magnetLink = require('magnet-link')

magnetLink('http://my-server.com/file.torrent', function (err, link) {
  // you got a magnet link from a remote torrent file
})

magnetLink('mydir/file.torrent', function (err, link) {
  // you got a magnet link from a local torrent file
})
```

The result is a string that looks like this.

```
magnet:?xt=urn:btih:[torrent-info-hash]
```

## Command-line interface

There is also a command-line interface available if you install it with `-g`.

```
npm install -g magnet-link
```

This installs a program called `magnet-link` that you simply pass a torrent file or url.

```
magnet-link http://my-server.com/file.torrent
```

This will print the magnet link to the terminal.

## Resources

Read more about the magnet URI scheme at the [magnet-uri project website](http://magnet-uri.sourceforge.net).

## Comments

Thanks to https://github.com/mafintosh for `read-torrent` and https://github.com/maxogden for telling me to do it.

## Contributing

[Open-2](CONTRIBUTING.md)

## License

[ISC](LICENSE.md)
