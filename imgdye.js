function imgdye (image, color, opacity) {
  if (color == null) {
    throw new Error('Expecting second argument to be a color.')
  }

  var buffer = document.createElement('canvas')
  buffer.width = image.width
  buffer.height = image.height
  var ctx = buffer.getContext('2d')

  ctx.fillStyle = color
  if (opacity != null) ctx.globalAlpha = opacity
  ctx.fillRect(0, 0, buffer.width, buffer.height)
  ctx.globalCompositeOperation = 'destination-atop'
  ctx.globalAlpha = 1
  ctx.drawImage(image, 0, 0)

  return buffer
}

if (typeof module === 'object') {
  module.exports = imgdye
}
