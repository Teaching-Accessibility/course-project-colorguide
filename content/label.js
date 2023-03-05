let statusLabelOn = null;
let statusLabelOff = null;

let count = 0

function createLabel(x, y, content) {
	console.log(`x-click: ${x}, y-click: ${y}`);
    let newLabel = document.createElement('div');

    newLabel.style.position = 'absolute';
    newLabel.style.zIndex = "999999999999997";
		newLabel.style.borderRadius = "4px";
    newLabel.style.background = "#ffffff";
    newLabel.style.cursor  = "pointer";
    newLabel.style.display = "block"
    newLabel.style.width = "120px";
    newLabel.style.height = "65px";
	newLabel.style.border = "1px solid black";
    newLabel.id = "ColorLabel" + count;
    count ++;
    newLabel.className = "colorlabel";

	newLabelPosition = labelPosition (x, y, newLabel.style.width, newLabel.style.height)
	let maximizeX= x;
	let maximizeY = y;
	// All the +5 -5 are = (size of circle lable) /2
	switch (newLabelPosition) {
		case 'top left':
			newLabel.style.top = x - parseInt(newLabel.style.height) - 5 + "px";
			newLabel.style.left =  y - parseInt(newLabel.style.width) - 5 + "px";
			addCircle(newLabel, parseInt(newLabel.style.height) + "px",  parseInt(newLabel.style.width) + "px");
			maximizeX=  parseInt(newLabel.style.height) + "px";
			maximizeY=   parseInt(newLabel.style.width) + "px";
			break;
		case 'top right':
			newLabel.style.top = x - parseInt(newLabel.style.height) - 5 + "px";
			newLabel.style.left = y + 5 + "px";
			addCircle(newLabel, parseInt(newLabel.style.height) + "px", "-11.25px");
			maximizeX=  parseInt(newLabel.style.height) + "px";
			maximizeY= "-11.25px";
			break;
			break;
		case 'bottom left':
			newLabel.style.top = x + 5 + "px";
			newLabel.style.left = y - parseInt(newLabel.style.width) - 5 + "px";
			addCircle(newLabel, "-11.25px", parseInt(newLabel.style.width) + "px");
			maximizeX=  "-11.25px";
			maximizeY= parseInt(newLabel.style.width) + "px";
			break;
		case 'bottom right':
			newLabel.style.top = x + 5 + "px";
			newLabel.style.left = y + 5 + "px";
			addCircle(newLabel, "-11.25px", "-11.25px");
			maximizeX= "-11.25px";
			maximizeY= "-11.25px";
			break;
		default:
			console.log(`Something wrong with label position`);
	}




	addMinimizeButton(newLabel, () => {toggleLabel(newMinimizedLabel, newLabel)});
	addCloseButton(newLabel);
	addContent(newLabel, content);
	document.body.appendChild(newLabel);
	let newMinimizedLabel = createMinimizedLabel (maximizeX, maximizeY, newLabel);
	document.body.appendChild(newMinimizedLabel);
}

function labelPosition(top, left, width, height) {
	console.log(`label top: ${top}, label left: ${left}`);
	top = parseInt(top)
	left = parseInt(left)
	width = parseInt(width)
	height = parseInt(height)
	let pageWidth  = document.documentElement.scrollWidth;
	let pageHeight = document.documentElement.scrollHeight;

	result = ""
	upperSide = (top + height) > pageHeight
	leftSide = (left + width) > pageWidth
	if (upperSide) {
		result += "top"
	} else {
		result += "bottom"
	}
	result += " "
	if (leftSide) {
		result += "left"
	} else {
		result += "right"
	}



	return result
}

function addCloseButton(label) {
	let closeButton = document.createElement("p");

	closeButton.style.float = "right";
	 closeButton.style.position = "absolute";
  closeButton.style.right = 0 +'px';
  closeButton.style.top = 0 +'px';
	closeButton.style.display ="inline";
	closeButton.style.color = "#000000";
	closeButton.style.margin = "auto";
	closeButton.style.fontSize = "20px";
	closeButton.style.paddingRight= "4px";
	closeButton.style.paddingTop = "0px";
	

	closeButton.className = "colorlabel_child";
	closeButton.onclick = () => {
		label.style.display = "none"
        label.parentNode.removeChild(label);
    };
	closeButton.style.fontFamily = "Arial,Calibri,sans-serif";
	closeButton.style.fontWeight = "normal";

	let closeSymbol = document.createTextNode("✕");
	closeButton.appendChild(closeSymbol);

	label.appendChild(closeButton);
}

function addMinimizeButton(label, func) {
	let minimizeButton = document.createElement("p");

	minimizeButton.style.float = "left";
	minimizeButton.style.position = "absolute";
  minimizeButton.style.left = 0 +'px';
  minimizeButton.style.top = -1 +'px';
	minimizeButton.style.display ="inline";
	minimizeButton.style.color = "#000000";
	minimizeButton.style.margin = "auto";
	minimizeButton.style.fontSize = "15px";
	minimizeButton.style.fontWeight = "normal";
	minimizeButton.style.paddingLeft = "5px";
	minimizeButton.style.paddingTop = "0px";

	minimizeButton.className = "colorlabel_child";
	minimizeButton.onclick = func;
	minimizeButton.style.fontFamily = "Arial,Calibri,sans-serif";
	minimizeButton.style.fontWeight = "normal";

	let minimizeSymbol = document.createTextNode("―");

	minimizeButton.appendChild( minimizeSymbol);

	label.appendChild( minimizeButton);
}

function addCircle(label, top, left) {
	console.log(`top: ${top}, left: ${left}`);
	let circle = document.createElement("p");
	circle.style.position = 'relative';
	circle.style.margin = "0px";

  circle.style.top = top;
  circle.style.left = left;
  circle.style.zIndex = "999999999999999";
	circle.style.height = "11.5px";
	circle.style.width = "11.5px";
	circle.style.border = "1px solid black";
	circle.style.borderRadius = "50%";
	circle.className = "colorlabel_child";

	label.appendChild(circle);
}

function addContent (label, content) {
	let textContent = document.createElement("p");

	textContent.style.color = "#000000";
	textContent.style.textAlign ="center";
	textContent.style.margin = "auto";

	// if (content.length <= 6 ){
	// 	console.log(content);
		textContent.style.fontSize = "18px";
	textContent.style.paddingTop = "12%";
	//	textContent.style.paddingLeft= "20%";
	//	textContent.style.paddingRight = "20%";
	// } else {
	// 	textContent.style.fontSize = "18px";
	// 	textContent.style.paddingLeft= "20%";
	// 	textContent.style.paddingRight = "20%";

	// }

	textContent.style.fontFamily = "Arial,Calibri,sans-serif";
	textContent.style.fontWeight = "normal";
	textContent.className = "colorlabel_child";

	textContent.appendChild(document.createTextNode(content));

	label.appendChild(textContent);
}

function createMinimizedLabel (top, left, label) {

	// circle.style.position = 'relative';
	// circle.style.margin = "0px";

  // circle.style.top = top;
  // circle.style.left = left;
  // circle.style.zIndex = "999999999999999";
	// circle.style.height = "11.5px";
	// circle.style.width = "11.5px";
	// circle.style.border = "1px solid black";
	// circle.style.borderRadius = "50%";
	// circle.className = "colorlabel_child";
	let newMinimizedLabel = document.createElement('div');

	newMinimizedLabel.style.position = 'relative';
	newMinimizedLabel.style.top = top;
	newMinimizedLabel.style.left = left;
	newMinimizedLabel.style.borderRadius = "40%";
	newMinimizedLabel.style.zIndex = "999999999999999";
	newMinimizedLabel.style.background = "#000000";
	newMinimizedLabel.style.cursor  = "pointer";
	newMinimizedLabel.style.display = "none"

	newMinimizedLabel.className = "colorlabel";

	let maximizeButton = document.createElement("p");

	maximizeButton.style.float = "left";
	maximizeButton.style.color = "#ffffff";
	maximizeButton.style.fontSize = "25px";
	maximizeButton.style.marginTop = "0px";
	maximizeButton.style.marginBottom = "0px";
	maximizeButton.style.padding = "5px";

	maximizeButton.style.fontFamily = "Arial,Calibri,sans-serif";
	
	maximizeButton.className = "colorlabel_child";
	maximizeButton.onclick = () => {toggleLabel(newMinimizedLabel, label)}

	let  maximizeSymbol = document.createTextNode("+");
	maximizeButton.appendChild(maximizeSymbol);
	newMinimizedLabel.appendChild(maximizeButton);

	return newMinimizedLabel
}

function toggleLabel(label1, label2)
{
	if(label1.style.display == 'none')
	{
		label2.style.display = 'none';
		label1.style.display = 'block';
	}
	else
	{  
		label1.style.display = 'none';
		label2.style.display = 'block'
	}
} 

function createStatusLabel (content) {
	let newStatusLabel = document.createElement('div'); 

	newStatusLabel.style.background = "#D3D3D3";
	newStatusLabel.style.height = "30px";
	newStatusLabel.style.width = "200px";
	newStatusLabel.style.position = "fixed";
	newStatusLabel.style.top = "0px";
	newStatusLabel.style.right = "0px";
	newStatusLabel.style.zIndex = "999999999999999";
	newStatusLabel.style.display = "none";
	newStatusLabel.style.cursor  = "pointer";
	// Stop text being chosen when dbl clicking
	newStatusLabel.style.userSelect = "none"

	newStatusLabel.className = "statuslabel";

	addCloseButton (newStatusLabel)
	let textContent = document.createElement("p");

	textContent.style.color = "#000000";
	textContent.style.textAlign ="center";
	textContent.style.fontFamily = "Arial,Calibri,sans-serif";
	textContent.style.margin = "auto";
	textContent.style.fontSize = "18px";
	textContent.style.paddingTop = "2%";

	textContent.className = "colorlabel_child";
	textContent.appendChild(document.createTextNode(content));

	newStatusLabel.appendChild(textContent);

	return newStatusLabel
}

function addStatusLabel () {
  statusLabelOn.style.display = "block";
  statusLabelOff.style.display = "none";
}

function removeStatusLabel () {
  statusLabelOn.style.display = "none";
  statusLabelOff.style.display = "block";
	setTimeout(() => { statusLabelOff.style.display = "none"; }, 2000);
}

function setupStatusLabel () {
	statusLabelOn = createStatusLabel ("Tool Turned On");
	statusLabelOff = createStatusLabel ("Tool Turned Off");
	statusLabelOn.addEventListener("dblclick", (e) => {
		e.preventDefault();
		on = false
		toggleOff ()
	});

	statusLabelOff.addEventListener("dblclick", (e) => {
		e.preventDefault();
		on = true
		toggleOn ()
	});

	document.body.appendChild(statusLabelOn);
  document.body.appendChild(statusLabelOff);
}