console.log("Hi, i have been injected")


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

// getting a randomID

function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    
    return randomId;
}

  // function that converts blob to base64
function blobToBase64(blob, callback) {
const reader = new FileReader();

reader.onload = function () {   
    const base64String = reader.result.split(',')[1];
    callback(base64String);
};

    reader.readAsDataURL(blob);
}


// calling the onAccessApproved function

let exportedBlob = null
var recorder = null 
let base64File = null

const onAccessApproved = (stream) => {
    // when access has been approved
    recorder = new MediaRecorder(stream)

    const formData = new FormData()
    formData.append("video_chunk", exportedBlob)

    
    const fetchedData = async () => {
        const response = await fetch("https://screen-recorder.fly.dev/start", {
            method: "POST"
        })

        const data = await response.json()
        return data.id
    } 
    
    let videoId;
    fetchedData()
        .then(data => videoId = data)

    // starts the recording
    recorder.start();

    // stopping the recording
    recorder.onstop = function() {
        fetch(`https://screen-recorder.fly.dev/stop/${videoId}`, {
            method: "POST",
            body: base64File
        })
            .then(res => res.json())
            .then(data => console.log("video stopped recording:", data))
            .catch(error => console.log(error))

        stream.getTracks().forEach(function(track) {
            console.log("stopped recording")
            if(track.readyState === "live") {
                track.stop()
            }
        })
    }

    // accessing the recording
    recorder.ondataavailable = function(event) {
        
        if(event.data.size > 0) {
            exportedBlob = new Blob([event.data], { type: 'video/webm' })
            console.log(videoId) 

            blobToBase64(exportedBlob, function (base64String) {
                base64File = base64String
            })

            fetch(`https://screen-recorder.fly.dev/sendBlob/${videoId}`, {
                method: "POST",
                body: base64File
            })
                .then(res => res.json())
                .then(data => console.log("video successfully sent:", data))
                .catch(error => console.log(error)) 
        }



        fetch(`https://screen-recorder.fly.dev/recordings/${videoId}`, {
            method: "GET", 
            body: base64File
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))



    // const retrieveData = async () => {
    //     const response = await fetch(`https://screen-recorder.fly.dev/recordings/${videoId}`, {
    //         method: "GET"
    //     })

    //     const data = response.json()
    //     return data
    // }
        
    // retrieveData()
    //     .then(data => console.log(data))


            
        

        
        // let recordedBlob = event.data
        // console.log(recordedBlob)

        // location.assign("/videoUrl")
        // saving the recording
        // let url = URL.createObjectURL(recordedBlob);
        // console.log(url)

        // downloading it to our system
        // let anchorTag = document.createElement("a")
        // anchorTag.style.display = "none"
        // // anchorTag.href = url

        // anchorTag.download = "screen-recording.webm"

        // document.body.appendChild(anchorTag)
        // anchorTag.click()

        // document.body.removeChild(anchorTag)

        // URL.revokeObjectURL(url)
    }
}

