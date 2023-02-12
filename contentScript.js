let children = document.body.children;
let tempCanvas = document.createElement('canvas');
let tempContext = tempCanvas.getContext('2d', { willReadFrequently: true });

function captureCurrentPixel(e) {
	let hexColor;

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

			// To-Do: Style div
			let div = document.createElement('div');
			div.style.position = 'absolute';
			div.style.top = e.pageY + 'px';
			div.style.left = e.pageX + 'px';
			div.style.zIndex = "99"
			div.innerHTML = hexColor
			document.body.appendChild(div);
		}
	});
}

function getColor(x, y) {
	let pixel = tempContext.getImageData(x, y, 1, 1).data;
	let red = pixel[0];
	let green = pixel[1];
	let blue = pixel[2];
	let hex = rgbToHex(red, green, blue)

	// To-Do: turn hex into color name
	console.log("Hex: ", hex)

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
