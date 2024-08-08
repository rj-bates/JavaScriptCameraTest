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

            // Check for torch support and get photo capabilities
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
                    const photo = await imageCapture.takePhoto({fillLightMode: 'auto'});
                    const img = document.getElementById('capturedImage');
                    img.src = URL.createObjectURL(photo);
                    img.style.display = 'block';
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

        // Add the event listener for native camera capture
        document.getElementById('nativeCaptureButton').addEventListener('click', async () => {
            try {
                const response = await fetch('http://localhost:5165/flashcontrol.FlashControl/TakePhotoWithNativeCamera', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/grpc-web+json',
                        'Accept': 'application/grpc-web+json'
                    },
                    body: JSON.stringify({})
                });
        
                if (!response.ok) {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                }
        
                const result = await response.json();
                if (result.filePath) {
                    const nativePhoto = document.getElementById('nativePhoto');
                    nativePhoto.src = `file:///${result.filePath.replace(/\\/g, '/')}`;
                    nativePhoto.style.display = 'block';
                } else {
                    alert('Error capturing photo with native camera: ' + result.errorMsg);
                }
            } catch (error) {
                console.error('Error calling gRPC service:', error);
                alert('Error calling gRPC service: ' + error.message);
            }
        });

    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Error accessing camera: ' + error.message + '. Please ensure you have granted camera permissions.');
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

window.onload = initCamera;
