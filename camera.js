async function initCamera() {
    try {
        const constraints = {
            video: {
                width: 1280,
                height: 720,
                facingMode: { exact: 'environment' }
            }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.getElementById('liveVideo');
        video.srcObject = stream;
        await video.play();

        const track = stream.getVideoTracks()[0];
        const capabilitiesDiv = document.getElementById('capabilities');

        if ('ImageCapture' in window) {
            const imageCapture = new ImageCapture(track);
            const capabilities = track.getCapabilities();
            const photoCapabilities = await imageCapture.getPhotoCapabilities();

            capabilitiesDiv.innerHTML = `<strong>Camera Capabilities:</strong><br>
                Torch Supported: ${capabilities.torch ? 'Yes' : 'No'}<br>
                <strong>Photo Capabilities:</strong><br>
                ${formatPhotoCapabilities(photoCapabilities)}
                <strong>Other Capabilities:</strong><br>
                ${JSON.stringify(capabilities, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}`;

            document.getElementById('captureButton').addEventListener('click', async () => {
                try {
                    // Try to turn on the flash
                    if (capabilities.torch) {
                        await track.applyConstraints({ advanced: [{ torch: true }] });
                    }

                    const photo = await imageCapture.takePhoto({ fillLightMode: 'flash' });
                    
                    // Turn off the flash after capturing
                    if (capabilities.torch) {
                        await track.applyConstraints({ advanced: [{ torch: false }] });
                    }

                    const img = document.getElementById('capturedImage');
                    img.src = URL.createObjectURL(photo);
                    img.style.display = 'block';
                } catch (error) {
                    console.error('Error capturing photo:', error);
                    alert('Error capturing photo: ' + error.message);
                }
            });
        } else {
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
        console.error('Error in initCamera:', error);
        alert('Error initializing camera: ' + error.message);
    }
}

function formatPhotoCapabilities(capabilities) {
    let result = '';
    for (const [key, value] of Object.entries(capabilities)) {
        if (value !== null && typeof value === 'object') {
            if ('min' in value && 'max' in value && 'step' in value) {
                result += `${key}: min ${value.min}, max ${value.max}, step ${value.step}<br>`;
            } else {
                result += `${key}: ${JSON.stringify(value)}<br>`;
            }
        } else {
            result += `${key}: ${value}<br>`;
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', initCamera);