let count = 0

function createLabel(top, left, content) {
    let newLabel = document.createElement('div');
    
    newLabel.style.position = 'absolute';
    newLabel.style.top = top;
    newLabel.style.left = left;
    newLabel.style.zIndex = "99";
    newLabel.style.background = "#ffffff";
	newLabel.style.cursor  = "pointer";

	// newLabel.innerHTML = content;
    newLabel.id = "ColorLabel" + count;
	newLabel.className = "colorlabel";
    count ++;
    // newLabel.style.height = "50%";
    // newLabel.style.width = "180px";

    addCloseButton(newLabel);
	addContent(newLabel, content);


	newLabel.onclick = () => {
        // newLabel.parentNode.removeChild(newLabel);
		console.log ("Hello there")
    };

	document.body.appendChild(newLabel);
}

function addCloseButton(label) {
	let closeButton = document.createElement("p");
	closeButton.style.textAlign = "right";
	closeButton.className = "colorlabel_child";
	closeButton.onclick = () => {
        label.parentNode.removeChild(label);
    };

	let closeSymbol = document.createTextNode("✕");
	closeButton.appendChild(closeSymbol);

	label.appendChild(closeButton);
}

function addContent (label, content) {
	let textContent = document.createElement("p");
	textContent.className = "colorlabel_child";
	textContent.appendChild(document.createTextNode(content));
	label.appendChild(textContent);
}