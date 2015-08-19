# imgdye

Tint PNG images using Javascript – very useful for projects/games using HTML5 Canvas.

## Install

```
$ npm install --save imgdye
```

## Usage

```javascript
var imgdye = require('imgdye')

// imgdye returns a buffer containing the testImage with a 70% opacity #33CC33 color overlay
var testImage = document.querySelector('.avatar')
var dyedTestImage = imgdye(testImage, '#33CC33', 0.7)

// Use the buffer to draw the tinted image on a canvas
ctx.drawImage(dyedTestImage, 0, 0)
```

Here's a simple test sample using the function: http://bluecodestudio.com/CanvasDye/test.html

## License

MIT © [David da Silva](http://dasilvacont.in)
