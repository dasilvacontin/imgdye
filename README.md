CanvasDye
=========

A simple function to tint PNG images.

```javascript

//Returns a buffer which contains the testImage with a 70% opacity #33CC33 color overlay.
var dyedTestImage = dyeImageWithColor(testImage, '#33CC33', 0.7);

//Use the buffer to draw the image on the canvas.
ctx.drawImage(dyedTestImage, 0, 0);

```

Here's the simple test sample using the function: http://bluecodestudio.com/CanvasDye/test.html
