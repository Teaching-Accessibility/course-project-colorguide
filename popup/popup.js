document.getElementById('start-button').addEventListener('click', () => {
    chrome.runtime.sendMessage({message: 'toggle'})
});
