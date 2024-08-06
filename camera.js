async function initCamera() {
    try {
        const constraints = {
            video: {
                width: 1280,
                height: 720,
                facingMode: { exact: 'environment' } // Request back-facing camera
            }
        };

        // Request camera permissions and stream
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.getElementById('video');
        video.srcObject = stream;

        const track = stream.getVideoTracks()[0];
        const capabilitiesDiv = document.getElementById('capabilities');

        if (window.ImageCapture) {
            const imageCapture = new ImageCapture(track);

            // Check for torch support
            const capabilities = track.getCapabilities();
            capabilitiesDiv.innerHTML = `<strong>Camera Capabilities:</strong><br>
                Torch Supported: ${capabilities.torch ? 'Yes' : 'No'}<br>
                Other Capabilities: ${JSON.stringify(capabilities, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}`;

            document.getElementById('captureButton').addEventListener('click', async () => {
                try {
                    if (capabilities.torch) {
                        // Enable the torch
                        await track.applyConstraints({
                            advanced: [{ torch: true }]
                        });
                    } else {
                        console.warn("Torch is not supported, attempting capture without torch");
                    }
                    
                    const photo = await imageCapture.takePhoto({fillLightMode:'flash'});
                    const img = document.getElementById('capturedImage');
                    img.src = URL.createObjectURL(photo);
                    img.style.display = 'block';

                    // Turn off the torch after capturing the photo
                    if (capabilities.torch) {
                        await track.applyConstraints({
                            advanced: [{ torch: false }]
                        });
                    }
                } catch (error) {
                    console.error('Error capturing photo:', error);
                    alert('Error capturing photo: ' + error.message);
                }
            });
        } else {
            // Fallback for devices without ImageCapture API support
            capabilitiesDiv.innerHTML = `<strong>Camera Capabilities:</strong><br>
                Torch Supported: No (ImageCapture API not supported)<br>`;

            document.getElementById('captureButton').addEventListener('click', async () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const img = document.getElementById('capturedImage');
                    img.src = canvas.toDataURL('image/png');
                    img.style.display = 'block';
                } catch (error) {
                    console.error('Error capturing photo:', error);
                    alert('Error capturing photo: ' + error.message);
                }
            });
        }
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Error accessing camera: ' + error.message + '. Please ensure you have granted camera permissions.');
    }
}

window.onload = initCamera;
