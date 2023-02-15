let children = document.body.children;
let tempCanvas = document.createElement('canvas');
let tempContext = tempCanvas.getContext('2d', { willReadFrequently: true });

function captureCurrentPixel(e) {
	console.log (e.target)
	let hexColor;
	if (e.target.className === "colorlabel" || e.target.className === "colorlabel_child") {
		return;
	}

	console.log("Capturing...")
	chrome.runtime.sendMessage({message: 'capture'}, (currentScreen) => {
		let img = new Image();
		img.src = currentScreen.imgSrc;
		img.onload = function() {
		tempCanvas.width = img.naturalWidth;
		tempCanvas.height = img.naturalHeight;

			tempContext.drawImage(img, 0, 0);
            tempContext.setAtt
			// Use pixel ratio to make sure it works on screens with very high resolutions like Retina
			hexColor = getColor(e.clientX * window.devicePixelRatio, e.clientY * window.devicePixelRatio);

			createLabel (e.pageY + 'px', e.pageX + 'px', hexColor)
		}
	});
}

function hexToColorName(hex){
	//
}

function getColor(x, y) {
	let pixel = tempContext.getImageData(x, y, 1, 1).data;
	let red = pixel[0];
	let green = pixel[1];
	let blue = pixel[2];
	let hex = rgbToHsl(red, green, blue)

	// To-Do: turn hex into color name
	console.log("Hex: ", hex)
	console.log("ColorName: ", hexToColorName(hex));

	// return color name here instead of hex
	return hex
}

function rgbToHex(r, g, b) {
    let hexCode = "";

    if (isNaN(r)) {
        hexCode += "00";
    } else {
        r = Math.max(0,Math.min(r,255));
        hexCode += "0123456789ABCDEF".charAt((r-r%16)/16)
            + "0123456789ABCDEF".charAt(r%16);
    }

    if (isNaN(g)) {
        hexCode += "00";
    } else {
        g = Math.max(0,Math.min(g,255));
        hexCode += "0123456789ABCDEF".charAt((g-g%16)/16)
            + "0123456789ABCDEF".charAt(g%16);
    }

    if (isNaN(b)) {
        hexCode += "00";
    } else {
        b = Math.max(0,Math.min(b,255));
        hexCode += "0123456789ABCDEF".charAt((b-b%16)/16)
            + "0123456789ABCDEF".charAt(b%16);
    }

    return "#" + hexCode;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  if (h < 0)
      h += 360;
	 l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}


const toggleOn = () => {
	for (let i = 0; i < children.length; i++) {
		children[i].style['pointer-events'] = 'none';
	}
	document.addEventListener("click", captureCurrentPixel, false);
}

const toggleOff = () => {
	for (let i = 0; i < children.length; i++) {
		children[i].style['pointer-events'] = 'auto';
	}
	document.removeEventListener('click', captureCurrentPixel, false);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.toggleOn === "true") {
		toggleOn ()
		console.log(`Tool turned on`)
	} else if (request.toggleOn === "false") {
		toggleOff ()
		console.log(`Tool turned off`)
	}
});
