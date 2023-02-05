const videoEl = document.querySelector("#video");
const button = document.querySelector("#button");

console.log(videoEl);

// Prompt user to select media stream, pass to videoEl, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        };
    } catch (err) {
        console.error(err);
    }
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoEl.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On load
// selectMediaStream();
