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
			let colorName = getColor(e.clientX * window.devicePixelRatio, e.clientY * window.devicePixelRatio);

			createLabel (e.pageY + 'px', e.pageX + 'px', 	colorName )
		}
	});
}

function colorNameTranslate(r,g,b){
	let hsl = rgbToHsl(r,g,b);
	let hue = hsl[0];
	let saturation = hsl[1];
	let lightness = hsl[2];
	let dark = false;
	let light = true;
	if (((75 <= saturation && saturation <= 100) && (5 <= lightness && lightness <= 25) ) || ((0 <= saturation && saturation <= 74) && (10 <= lightness && lightness <= 40) )){
		console.log("dark");
	} else if (((75 <= saturation && saturation <= 100) && (75 <= lightness && lightness <= 95) ) || ((0 <= saturation && saturation <= 74) && (60 <= lightness && lightness <= 90) )){
		console.log("light");
	}

	if ((290 <= hue && hue <= 344) && 10 <= saturation){
		console.log("pink");
		if (dark){
			return "Dark Pink";
		}
		if (light){
			return "Light Pink";
		}
				return "Pink";
	}
	else if ((0 <= hue && hue <= 14 || 345 <= hue && hue <= 360) && 10 <= saturation ){
		console.log("red");
		if (dark){
			return "Dark Red";
		}
		if (light){
			return "Pink";
		}
		return "Red";
	} else if (((0 <=hue && hue <=100) && (0 <= saturation && saturation <= 10)) &&  (11 <= lightness <= 89)){
	console.log("Grey");
	if (dark){
			return "Dark Grey";
		}
		if (light){
			return "Light Grey";
		}
				return "Grey";
	} else if ((0 <=hue && hue <=100) && ((0 <= saturation && saturation<= 74) && (90 <= lightness && lightness <= 100)) ){
				console.log("white");
				return "White";
	}
	else if ((15 <= hue && hue <= 44) && 10 <= saturation){
		console.log("orange");
		if (dark){
			return "Dark Orange";
		}
		if (light){
			return "Light Orange";
		}
		return "Orange";
	} 
	else if ((45 <= hue && hue <= 74) && 10 <= saturation){
		console.log("yellow");
		if (dark){
			return "Dark Yellow";
		}
		if (light){
			return "Light Yellow";
		}
				return "Yellow";
	}
	else if ((75 <= hue && hue <= 144) && 10 <= saturation){
		console.log("Green");
		if (dark){
			return "Dark Green";
		}
		if (light){
			return "Light Green";
		}
				return "Green";
	}
	if ((145 <= hue && hue <= 199) && 10 <= saturation){
			console.log("teal");
			if (dark){
				return "Dark Teal";
			}
			if (light){
				return "Light Teal";
			}
			return "Teal";
	}
	else if ((200 <= hue && hue <= 254) && 10 <= saturation){
		console.log("blue");
		if (dark){
				return "Dark Blue";
			}
			if (light){
				return "Light Blue";
			}
				return "Blue";
	}
	else if ((255 <= hue && hue <= 289) && 10 <= saturation){
		console.log("purple");
		if (dark){
				return "Dark Purple";
			}
			if (light){
				return "Light Purple";
			}
				return "Purple";
	} else if ((0 <=hue && hue <=100) && (((75 <= saturation && saturation <= 100) && (0 <= lightness && lightness <= 5)) || ((0 <= saturation && saturation <= 74) && (0 <= lightness && lightness <= 10)))){
			console.log("black");
				return "Black";
	} 
	

// “Gray” prefix: Gray prefix indicates a lack of saturation
// 0 <= Hue <= 100
// 10 <= Saturation <= 49 
// Any lightness that doesn’t qualify it as black or white
	console.log(hue);
	console.log(saturation);
	console.log(lightness);
	return "Unknown"


}

function getColor(x, y) {
	let pixel = tempContext.getImageData(x, y, 1, 1).data;
	let red = pixel[0];
	let green = pixel[1];
	let blue = pixel[2];
	let hex = rgbToHex(red, green, blue);
	let name = colorNameTranslate(red, green, blue);

	// To-Do: turn hex into color name
	console.log("Hex: ", hex);
	//console.log("ColorName: ", hexToColorName(hex));

	// return color name here instead of hex
	return name;
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

  // return "hsl(" + h + "," + s + "%," + l + "%)";
	return [h,s,l]
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
