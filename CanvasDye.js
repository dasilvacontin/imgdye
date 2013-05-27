function dyeImageWithColor (image, color, val) {

	var buffer = document.createElement('canvas');
	buffer.width = image.width;
    buffer.height = image.height;
    var bctx = buffer.getContext('2d');
    if (val) bctx.globalAlpha = val;
    if (color) bctx.fillStyle = color;
    bctx.fillRect(0,0,buffer.width,buffer.height);
    bctx.globalCompositeOperation = "destination-atop";
    bctx.globalAlpha = 1;
    bctx.drawImage(image,0,0);

    return buffer;

}