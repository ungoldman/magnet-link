# magnet-link
## DEPRECATED: this project is no longer maintained

Get a magnet link from a torrent file.

[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/magnet-link.svg?style=flat-square
[2]: https://www.npmjs.com/package/magnet-link
[3]: https://img.shields.io/travis/ungoldman/magnet-link/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/magnet-link
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/magnet-link.svg?style=flat-square

Read more about the magnet URI scheme at the [magnet-uri project website](http://magnet-uri.sourceforge.net/).

## Install

```
npm install magnet-link
```

## Usage

### Node

```js
var magnetLink = require('magnet-link')

magnetLink('http://my-server.com/file.torrent', function (err, link) {
  if (err) throw err
  console.log(link)
  // you got a magnet link from a remote torrent file
})

magnetLink('mydir/file.torrent', function (err, link) {
  if (err) throw err
  console.log(link)
  // you got a magnet link from a local torrent file
})
```

The result is a string that looks like this.

```
magnet:?xt=urn:btih:[torrent-info-hash]
```

### CLI

There is also a command-line interface available if you install it with `-g`.

```
npm install -g magnet-link
```

This installs a program called `magnet-link` that you simply pass a torrent file or url.

```
magnet-link http://my-server.com/file.torrent
```

This will print the magnet link to the terminal.


#### Pipes

You can also pipe the contents of a torrent file to `magnet-link`:

```
cat file.torrent | magnet-link
magnet-link < file.torrent
```

This way it can be paired with [`create-torrent`](https://github.com/feross/create-torrent):

```
create-torrent . | magnet-link
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[ISC](LICENSE.md)
