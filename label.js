let count = 0

function createLabel(top, left, content) {
    let newLabel = document.createElement('div');
    
    newLabel.style.position = 'absolute';
    newLabel.style.top = top;
    newLabel.style.left = left;
    newLabel.style.zIndex = "99";
    newLabel.style.background = "#ffffff";
		newLabel.style.cursor  = "pointer";
		newLabel.style.display = "block"
    newLabel.id = "ColorLabel" + count;
		newLabel.className = "colorlabel";
    count ++;


	let newMinimizedLabel = createMinimizedLabel (top, left, newLabel);

	addMinimizeButton(newLabel, () => {toggleDiv(newMinimizedLabel, newLabel)});
  addCloseButton(newLabel);
	addContent(newLabel, content);

	document.body.appendChild(newLabel);
	document.body.appendChild(newMinimizedLabel);
}

function addCloseButton(label) {
	let closeButton = document.createElement("p");
	closeButton.style.display ="inline-flex";
	closeButton.style.float = "right";
	closeButton.style.color = "#000000";
	closeButton.className = "colorlabel_child";
	closeButton.onclick = () => {
        label.parentNode.removeChild(label);
    };

	let closeSymbol = document.createTextNode("✕");
	closeButton.appendChild(closeSymbol);

	label.appendChild(closeButton);
}

function addMinimizeButton(label, func) {
	let minimizeButton = document.createElement("p");
	minimizeButton.style.float = "left";
	minimizeButton.style.display ="inline-flex";
	minimizeButton.style.color = "#000000";
	minimizeButton.className = "colorlabel_child";
	minimizeButton.onclick = func

	let minimizeSymbol = document.createTextNode("-");
	minimizeButton.appendChild( minimizeSymbol);

	label.appendChild( minimizeButton);
}


function addContent (label, content) {
	let textContent = document.createElement("p");
	textContent.className = "colorlabel_child";
	textContent.appendChild(document.createTextNode(content));
	textContent.style.color = "#000000";
	textContent.style.textAlign ="center";
	textContent.style.padding = "10px 10px 0px 10px "; 

	label.appendChild(textContent);
}

function createMinimizedLabel (top, left, label) {
	let newMinimizedLabel = document.createElement('div');
	newMinimizedLabel.style.position = 'absolute';
  newMinimizedLabel.style.top = top;
  newMinimizedLabel.style.left = left;
  newMinimizedLabel.style.zIndex = "99";
  newMinimizedLabel.style.background = "#000000";
	newMinimizedLabel.style.cursor  = "pointer";
	newMinimizedLabel.style.display = "none"
	newMinimizedLabel.className = "colorlabel_child";

	let maximizeButton = document.createElement("p");
	maximizeButton.style.float = "left";
	maximizeButton.style.display ="inline-flex";
	maximizeButton.style.color = "#ffffff";
	maximizeButton.className = "colorlabel_child";
	maximizeButton.onclick = () => {toggleDiv(newMinimizedLabel, label)}

	let  maximizeSymbol = document.createTextNode("+");
	maximizeButton.appendChild(maximizeSymbol);

	newMinimizedLabel.appendChild(maximizeButton);

	return newMinimizedLabel
}

function toggleDiv(div1, div2)
{
	if(div1.style.display == 'none')
	{
		div2.style.display = 'none';
		div1.style.display = 'block';
	}
	else
	{  
		div1.style.display = 'none';
		div2.style.display = 'block'
	}
} 