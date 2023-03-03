let children = document.body.children;
let tempCanvas = document.createElement('canvas');
let tempContext = tempCanvas.getContext('2d', { willReadFrequently: true });

function captureCurrentPixel(e) {
	if (e.target.className === "colorlabel" || e.target.className === "colorlabel_child") {
		return;
	}

	chrome.runtime.sendMessage({message: 'capture'}, (currentScreen) => {
		let img = new Image();
		img.src = currentScreen.imgSrc;
		img.onload = function() {
		tempCanvas.width = img.naturalWidth;
		tempCanvas.height = img.naturalHeight;

			tempContext.drawImage(img, 0, 0);
            tempContext.setAtt
			let colorName = getColor(e.clientX * window.devicePixelRatio, e.clientY * window.devicePixelRatio);
			
			// TODO make it so tags cant go off screen
			// label width: 100px, label height 60px or 80px
			// if (window.innerWidth - e.clientX > 100px){
			// 	 offset creation
			// }
			
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


// buggy functionality for removing all tags with alt shift r
const labelRemove = () => {
	// removeStatusLabel ();
	const labels = Array.prototype.slice.call(document.getElementsByClassName("colorlabel"), 0);
	for (const label of labels) {
		if (label.id === "statuslabel") continue;
		label.parentNode.removeChild(label);
	}

	console.log (`Deleted ${labels.length} labels`)
}

// Status of tool
let on = false
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === 'toggleTool') {
		on = !on
		if (on) {
			toggleOn ()
			console.log(`Tool turned on`)
		} else {
			toggleOff ()
			console.log(`Tool turned off`)
		}
	} else if (request.message === 'removeLabels') {
		labelRemove()
	}
});
