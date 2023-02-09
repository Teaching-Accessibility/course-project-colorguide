// Keep tracks if tool is on or off
let on = false

// Listen to short-cut command (Ctrl+Shift+1)
// and turn on/off
chrome.commands.onCommand.addListener((command) => {
	if (command === 'toggle'){
		on = !on
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (on) {
				chrome.scripting.executeScript({
					target : {tabId : tabs[0].id},
					func : () => {console.log(`Tool turned on`)},
				});
			} else {
				chrome.scripting.executeScript({
					target : {tabId : tabs[0].id},
					func : () => {console.log(`Tool turned off`)},
				});
			}

			chrome.tabs.sendMessage(tabs[0].id, {toggleOn: on? "true":"false"});
        })
	}
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message == 'capture') {
		chrome.tabs.captureVisibleTab(chrome.windows.WINDOW_ID_CURRENT, function(dataUrl) {
			sendResponse({imgSrc: dataUrl, message: 'done'});
			return true;
		});
	}
	// This is similar to command, but from the popup.js 
	else if (request.message === 'toggle'){
		on = !on
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (on) {
				chrome.scripting.executeScript({
					target : {tabId : tabs[0].id},
					func : () => {console.log(`Tool turned on`)},
				});
			} else {
				chrome.scripting.executeScript({
					target : {tabId : tabs[0].id},
					func : () => {console.log(`Tool turned off`)},
				});
			}

			chrome.tabs.sendMessage(tabs[0].id, {toggleOn: on? "true":"false"});
        })
	}
	return true;
});