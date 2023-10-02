console.log("Hi, i have been injected")


var recorder = null
const onAccessApproved = (stream) => {
    // when access has been approved
    recorder = new MediaRecorder(stream)

    // starts the recording
    recorder.start();

    // stopping the recording
    recorder.onstop = function() {
        stream.getTracks().forEach(function(track) {
            console.log("stopped recording")
            if(track.readyState === "live") {
                track.stop()
                
            }
        })
    }

    // accessing the recording
    recorder.ondataavailable = function(event) {
        let recordedBlob = event.data
        console.log(recordedBlob)

        // location.assign("https://www.github.com")
        // saving the recording
        let url = URL.createObjectURL(recordedBlob);
        console.log(url)

        // downloading it to our system
        let anchorTag = document.createElement("a")
        anchorTag.style.display = "none"
        anchorTag.href = url

        anchorTag.download = "screen-recording.webm"

        document.body.appendChild(anchorTag)
        anchorTag.click()

        document.body.removeChild(anchorTag)

        URL.revokeObjectURL(url)
    }
}



chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=> {

    // listening for the message
    if(message.action === "request_recording") {
        console.log("requesting recording")

        sendResponse(`Processed: ${message.action}`)

        // requesting from the browser permission to record

        navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: {
                width: 999999999,
                height: 999999999
            },
            surfaceSwitching: "include"
        }).then((stream) => {
            console.log(stream)
            onAccessApproved(stream)
        })
    }

    if(message.action === "stop_video") {
        console.log("stopping video")

        sendResponse(`Processed: ${message.action}`)

        if(!recorder) {
            return console.log("no recorder")
        } else {
            recorder.stop()
        }
    }
})