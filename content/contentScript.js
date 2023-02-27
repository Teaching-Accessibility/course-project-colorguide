let children = document.body.children;
let tempCanvas = document.createElement('canvas');
let tempContext = tempCanvas.getContext('2d', { willReadFrequently: true });

function captureCurrentPixel(e) {
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
			let colorName = getColor(e.clientX * window.devicePixelRatio, e.clientY * window.devicePixelRatio);

			createLabel (e.pageY + 'px', e.pageX + 'px', 	colorName )
		}
	});
}

const toggleOn = () => {
	for (let i = 0; i < children.length; i++) {
		if (children[i].className === "colorlabel" || children[i].className === "colorlabel_child") {
			continue;
		}
		children[i].style['pointer-events'] = 'none';
	}
	addStatusLabel ();
	document.addEventListener("click", captureCurrentPixel, false);
}

const toggleOff = () => {
	for (let i = 0; i < children.length; i++) {
		if (children[i].className === "colorlabel" || children[i].className === "colorlabel_child") {
			continue;
		}
		children[i].style['pointer-events'] = 'auto';
	}
	document.body.style.cursor = "default";
	removeStatusLabel ();
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
//  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     toggleOff ()
// 		console.log(`Tool turned off`)
//  });