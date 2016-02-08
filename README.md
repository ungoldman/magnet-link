# magnet-link

> Get a magnet link from a torrent file.

[![npm][npm-image]][npm-link]
[![travis][travis-image]][travis-link]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/magnet-link.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/magnet-link
[travis-image]: https://img.shields.io/travis/ngoldman/magnet-link.svg?style=flat-square
[travis-link]: https://travis-ci.org/ngoldman/magnet-link
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://standardjs.com/

Read more about the magnet URI scheme at the [magnet-uri project website](http://magnet-uri.sourceforge.net/).

## Install

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

### Command-line interface

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

## Comments

Thanks to [mafintosh](https://github.com/mafintosh) for [`read-torrent`](https://github.com/mafintosh/read-torrent) and [maxogden](https://github.com/maxogden) for telling me to do it.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[ISC](LICENSE.md)
