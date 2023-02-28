
function colorNameTranslate(r,g,b){
	let hsl = rgbToHsl(r,g,b);
	let hue = hsl[0];
	let saturation = hsl[1];
	let lightness = hsl[2];
	let dark = false;
	let light = false;

	if (((75 <= saturation && saturation <= 100) && (5 <= lightness && lightness <= 25) ) || ((0 <= saturation && saturation <= 74) && (10 <= lightness && lightness <= 40) )){
		dark = true;
	} else if (((75 <= saturation && saturation <= 100) && (75 <= lightness && lightness <= 95) ) || ((0 <= saturation && saturation <= 74) && (60 <= lightness && lightness <= 90) )){
		light = true;
	}

	if ((0 <= hue && hue <=100) && (((75 <= saturation && saturation <= 100) && (0 <= lightness && lightness <= 5)) || ((0 <= saturation && saturation <= 74) && (0 <= lightness && lightness <= 10)))){
		return "Black";
	}
	if ((0 <= hue && hue <=100) && ((0 <= saturation && saturation<= 74) && (90 <= lightness && lightness <= 100)) ){
		return "White";
	}


	if ((300 <= hue && hue <= 344) && 12 <= saturation){
		if (dark){
			return "Dark Pink";
		}
		if (light){
			return "Light Pink";
		}
				return "Pink";
	} else if ((0 <=hue && hue <= 38)  && (31 <=saturation && saturation <= 100) && (3 <= lightness && lightness <= 20)){
		if (dark){
			return "Dark Brown";
		}
		if (light){
			return "Light Brown";
		}
		return "Brown";
	}
	else if ((0 <= hue && hue <= 14 || 345 <= hue && hue <= 360) && 12 <= saturation ){
		if (dark){
			return "Dark Red";
		}
		if (light){
			return "Light Red";
		}
		return "Red";
	} else if ((0 <= saturation && saturation <= 12) &&  (11 <= lightness <= 89)){
	if (dark){
			return "Dark Gray";
		}
		if (light){
			return "Light Gray";
		}
		return "Gray";
	}
	else if ((15 <= hue && hue <= 44) && 12 <= saturation){
		if (dark){
			return "Brown";
		}
		if (light){
			return "Light Orange";
		}
		return "Orange";
	} 
	else if ((45 <= hue && hue <= 74) && 12 <= saturation){
		if (dark){
			return "Dark Yellow";
		}
		if (light){
			return "Light Yellow";
		}
		return "Yellow";
	}
	else if ((75 <= hue && hue <= 144) && 12 <= saturation){
		if (dark){
			return "Dark Green";
		}
		if (light){
			return "Light Green";
		}
		return "Green";
	}
	if ((145 <= hue && hue <= 199) && 12 <= saturation){
			if (dark){
				return "Dark Teal";
			}
			if (light){
				return "Light Teal";
			}
		return "Teal";
	}
	else if ((200 <= hue && hue <= 254) && 12 <= saturation){
		if (dark){
				return "Dark Blue";
			}
			if (light){
				return "Light Blue";
			}
		return "Blue";
	}
	else if ((255 <= hue && hue <= 299) && 12 <= saturation){
		if (dark){
				return "Dark Purple";
			}
			if (light){
				return "Light Purple";
			}
		return "Purple";
	}
	

// “Gray” prefix: Gray prefix indicates a lack of saturation
// 0 <= Hue <= 100
// 10 <= Saturation <= 49 
// Any lightness that doesn’t qualify it as black or white
	// console.log(hue);
	// console.log(saturation);
	// console.log(lightness);
	return "Unknown"
}

function getColor(x, y) {
	let listOfNames = []
	let pixelList = tempContext.getImageData(x -2, y -2, 5, 5).data;

	for (i = 0; i < pixelList.length; i += 4) {
		let red = pixelList[i];
		let green = pixelList[i + 1];
		let blue = pixelList[i + 2];
		
		n_shade_name = colorNameTranslate(red, green, blue);
		listOfNames.push(n_shade_name)
	}
	console.log (listOfNames)

	let mostCommon = listOfNames.sort((a,b) =>
		listOfNames.filter(v => v===a).length - listOfNames.filter(v => v===b).length
	).pop();

	return mostCommon;
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

	return [h,s,l]
}