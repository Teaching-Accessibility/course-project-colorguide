let statusLabel = createStatusLabel ("Tool Turned On");
let statusLabelOff = createStatusLabel ("Tool Turned Off");
let count = 0

function createLabel(top, left, content) {
    let newLabel = document.createElement('div');
    
    newLabel.style.position = 'absolute';
    newLabel.style.top = top;
    newLabel.style.left = left;
    newLabel.style.zIndex = "999999999999997";
    newLabel.style.background = "#ffffff";
    newLabel.style.cursor  = "pointer";
    newLabel.style.display = "block"
    newLabel.style.width = "100px";
    newLabel.style.height = "65px";
    newLabel.id = "ColorLabel" + count;
    newLabel.className = "colorlabel";

	
    count ++;

	let newMinimizedLabel = createMinimizedLabel (top, left, newLabel);

	addMinimizeButton(newLabel, () => {toggleDiv(newMinimizedLabel, newLabel)});
	addCloseButton(newLabel);
	// addCircle(newLabel, top, left);
	addContent(newLabel, content);

	document.body.appendChild(newLabel);
	document.body.appendChild(newMinimizedLabel);
}


function addCloseButton(label) {
	let closeButton = document.createElement("p");

	closeButton.style.float = "right";
	closeButton.style.display ="inline";
	closeButton.style.color = "#000000";
	closeButton.style.margin = "auto";
	closeButton.style.fontSize = "20px";
	closeButton.style.padding= "4px";
	

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

function addCircle(label, top, left) {
	let circle = document.createElement("p");
	//	circle.style.position = 'absolute';

    circle.style.top = top;
		console.log(top);
    circle.style.left = left;
    circle.style.zIndex = "999999999999999";
		circle.style.height = "10px";
		circle.style.width = "10px";
		circle.style.backgroundColor = "#D3D3D3";
		circle.style.outlineColor = "black";
		circle.style.borderRadius = "50%";
	 circle.className = "colorlabel_child";

	label.appendChild(circle);
}


function addMinimizeButton(label, func) {
	let minimizeButton = document.createElement("p");

	minimizeButton.style.float = "left";
	minimizeButton.style.display ="inline";
	minimizeButton.style.color = "#000000";
	minimizeButton.style.margin = "auto";
	minimizeButton.style.fontSize = "15px";
	minimizeButton.style.fontWeight = "normal";
	minimizeButton.style.padding = "5px";
	minimizeButton.style.paddingBottom = "6px";


	minimizeButton.className = "colorlabel_child";
	minimizeButton.onclick = func;
	minimizeButton.style.fontFamily = "Arial,Calibri,sans-serif";
	minimizeButton.style.fontWeight = "normal";


	let minimizeSymbol = document.createTextNode("―");

	minimizeButton.appendChild( minimizeSymbol);

	label.appendChild( minimizeButton);
}

function addContent (label, content) {
	let textContent = document.createElement("p");

	textContent.style.color = "#000000";
	textContent.style.textAlign ="center";
	textContent.style.margin = "auto";

	if (content.length <= 6 ){
		textContent.style.fontSize = "18px";
		textContent.style.paddingTop = "25%";
		textContent.style.paddingLeft= "20%";
		textContent.style.paddingRight = "20%";
	} else{
		textContent.style.fontSize = "18px";
		textContent.style.paddingTop = "10%";
		textContent.style.paddingLeft= "20%";
		textContent.style.paddingRight = "20%";
	}
	//  textContent.style.paddingLeft = "1.5%";
	//  textContent.style.paddingRight = "1.5%";
	///textContent.style.paddingBottom = "12%";
	textContent.style.fontFamily = "Arial,Calibri,sans-serif";
	textContent.style.fontWeight = "normal";
	textContent.className = "colorlabel_child";

	textContent.appendChild(document.createTextNode(content));

	label.appendChild(textContent);
}

function createMinimizedLabel (top, left, label) {
	let newMinimizedLabel = document.createElement('div');

	newMinimizedLabel.style.position = 'absolute';
	newMinimizedLabel.style.top = top;
	newMinimizedLabel.style.left = left;
	newMinimizedLabel.style.zIndex = "999999999999999";
	newMinimizedLabel.style.background = "#000000";
	newMinimizedLabel.style.cursor  = "pointer";
	newMinimizedLabel.style.display = "none"

	newMinimizedLabel.className = "colorlabel";

	let maximizeButton = document.createElement("p");

	maximizeButton.style.float = "left";
	//maximizeButton.style.display ="inline-block;";
	maximizeButton.style.color = "#ffffff";
	maximizeButton.style.fontSize = "25px";
	maximizeButton.style.marginTop = "0px";
	maximizeButton.style.marginBottom = "0px";
	maximizeButton.style.padding = "5px";

	maximizeButton.style.fontFamily = "Arial,Calibri,sans-serif";
	//maximizeButton.style.fontWeight = "normal";
	
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

function toggleLabel(div1, div2)
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
	newStatusLabel.id = "statuslabel"
	newStatusLabel.className = "colorlabel";

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

function createStatusLabelOff (content) {
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
	newStatusLabel.id = "statuslabel"
	newStatusLabel.className = "colorlabel";

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
	statusLabel.style.display = "block";
	// statusLabel.style.height = "100px";
	document.body.appendChild(statusLabel);
}

function addStatusOffLabel () {
	statusLabelOff.style.display = "block";
	document.body.appendChild(statusLabelOff);
}

function removeStatusLabel () {
	if (statusLabel.style.display === "none") return;
	statusLabel.style.display = "none";
	statusLabel.parentNode.removeChild(statusLabel);
}
