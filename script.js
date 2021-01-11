const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt the user to select a media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };

    } catch (error) {
        console.log('erroare');

    }
}

button.addEventListener('click', async() => {
    // Disable the button
    button.disabled = true;
    // Start Picture In Picture mode
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

selectMediaStream();