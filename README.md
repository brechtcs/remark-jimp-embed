# remark-jimp-embed

Remark plugin to embed images and edit them with [Jimp](https://github.com/oliver-moran/jimp).

## Installation

```sh
npm install remark-jimp-embed
```

## Usage

```js
var remark = require('remark')
var embed = require('remark-jimp-embed')

var out = await remark()
  .use(embed, transform)
  .process(input)

function transform (img) {
  img.resize(800, 600)
  img.quality(75)
  return img
}
```

## License

Apache-2.0
