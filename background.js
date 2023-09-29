// chrome

chrome.tabs.onUpdated.addListener((tabId, chnageInfo, tab) => {
    if(chnageInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./src/js/content.js"]
        }).then(() => {
            console.log("we have injected the content script")
        }).catch((error) => console.log(error, "error in background js line 10"))
    }
})

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

// })