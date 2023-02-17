let statusLabel = createStatusLabel ();
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
    newLabel.style.width = "100px";
    newLabel.style.height = "50px";
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

function addButtons(newLabel, top, left){
	let addButtons = document.createElement("div");
	let newMinimizedLabel = createMinimizedLabel (top, left, newLabel);
	addMinimizeButton(newLabel, () => {toggleDiv(newMinimizedLabel, newLabel)});
  addCloseButton(newLabel);

}

function addCloseButton(label) {
	let closeButton = document.createElement("p");
		closeButton.style.float = "right";
	closeButton.style.display ="inline";

	closeButton.style.color = "#000000";
		closeButton.style.fontSize = "15px";
	closeButton.className = "colorlabel_child";
	closeButton.onclick = () => {
		label.style.display = "none"
        label.parentNode.removeChild(label);
    };
		closeButton.style.paddingTop = "0px";
	// closeButton.style.paddingBottom = "2px";
	let closeSymbol = document.createTextNode("✕");
	closeButton.appendChild(closeSymbol);

	label.appendChild(closeButton);
}

function addMinimizeButton(label, func) {
	let minimizeButton = document.createElement("p");
	minimizeButton.style.float = "left";
	minimizeButton.style.display ="inline";
	minimizeButton.style.color = "#000000";
    minimizeButton.style.alignItems = "center";
    minimizeButton.style.width = "50%";
    minimizeButton.style.height = "50%";
    minimizeButton.style.justifyContent = "center";
	minimizeButton.className = "colorlabel_child";
	minimizeButton.style.margin = "auto";
	minimizeButton.onclick = func;
	minimizeButton.style.fontSize = "10px";
	minimizeButton.style.fontWeight = "normal";
	minimizeButton.style.padding = "2px";
	let minimizeSymbol = document.createTextNode("―");
	minimizeButton.appendChild( minimizeSymbol);

	label.appendChild( minimizeButton);
}

function addContent (label, content) {
	let textContent = document.createElement("p");
	textContent.className = "colorlabel_child";
	textContent.appendChild(document.createTextNode(content));
	textContent.style.color = "#000000";
	textContent.style.textAlign ="center";
<<<<<<< HEAD:label.js
	textContent.style.padding = "5px";
	

=======
	textContent.style.padding = "10px 10px 0px 10px "; 
    textContent.style.width = "100%";
    textContent.style.height = "50%";
>>>>>>> 635cddc1a54709289e23343a7de03cdac2904561:content/label.js
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
	maximizeButton.style.display ="inline-block;";
	maximizeButton.style.color = "#ffffff";
	maximizeButton.className = "colorlabel_child";
	maximizeButton.onclick = () => {toggleDiv(newMinimizedLabel, label)}
	maximizeButton.style.fontSize = "20px";
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

function createStatusLabel () {
	let newStatusLabel = document.createElement('div'); 

	newStatusLabel.style.background = "green";
	newStatusLabel.style.height = "30px";
	newStatusLabel.style.width = "200px";
	newStatusLabel.style.position = "fixed";
	newStatusLabel.style.top = "0px";
	newStatusLabel.style.right = "0px";
	newStatusLabel.style.zIndex = "99";
	newStatusLabel.style.display = "none";
	newStatusLabel.style.cursor  = "pointer";

	newStatusLabel.className = "colorlabel";

	addCloseButton (newStatusLabel)
	addContent (newStatusLabel, "Tool Turned On")

	return newStatusLabel
}

function addStatusLabel () {
	statusLabel.style.display = "block";
	document.body.appendChild(statusLabel);
}

function removeStatusLabel () {
	if (statusLabel.style.display === "none") return;

	statusLabel.style.display = "none";
	statusLabel.parentNode.removeChild(statusLabel);
}