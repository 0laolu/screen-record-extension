document.addEventListener("DOMContentLoaded", ()=> {
    // getting the buttons
    const startBtn = document.querySelector('.start-btn')
    const stopBtn = document.querySelector('.stop-btn')

    // adding event listeners to the button
    startBtn.addEventListener("click", ()=> {
        // finding the tab that is active
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // get the first tab and send a message, "request_recording", to the tabs ID using the tabs API 
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response) {
                if(!chrome.runtime.lastError) {
                    console.log(response)
                    chrome.runtime.lastError 
                } else {
                    console.log(chrome.runtime.lastError, "error line 14")
                }
            })
        })
    })


    stopBtn.addEventListener("click", ()=> {
        // finding the tab that is active
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // get the first tab and send a message, "request_recording", to the tabs ID using the tabs API 
            chrome.tabs.sendMessage(tabs[0].id, {action: "stop_video"}, function(response) {
                if(!chrome.runtime.lastError) {
                    console.log(response)
                    chrome.runtime.lastError 
                } else {
                    console.log(chrome.runtime.lastError, "error line 30")
                }
            })
        })
    })
})