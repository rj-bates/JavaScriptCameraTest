async function initCamera() {
    try {
        console.log('initCamera function called. flashcontrol object:', flashcontrol);
        
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

        if ('ImageCapture' in window) {
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

        console.log('Attempting to initialize gRPC-Web client...');
        if (typeof flashcontrol === 'undefined' || typeof flashcontrol.FlashControl === 'undefined') {
            throw new Error('flashcontrol or FlashControl is not defined. Check if bundle.js is loaded correctly and exposes the necessary objects.');
        }
        const client = new flashcontrol.FlashControl('https://localhost:5165', null, null);
        console.log('gRPC-Web client initialized:', client);

        // Add the event listener for native camera capture using gRPC-Web
        document.getElementById('nativeCaptureButton').addEventListener('click', () => {
            console.log('Native capture button clicked');
            // Create an Empty message
            const request = new flashcontrol.EmptyRequest();
            console.log('Created EmptyRequest:', request);
            
            console.log('Calling takePhotoWithNativeCamera...');
            client.takePhotoWithNativeCamera(request, {}, (err, response) => {
                if (err) {
                    console.error('Error calling gRPC service:', err);
                    alert('Error calling gRPC service: ' + err.message);
                    return;
                }
                console.log('Received response from takePhotoWithNativeCamera:', response);
                const filePath = response.getFilePath();
                const errorMsg = response.getErrorMsg();
                if (filePath) {
                    console.log('File path received:', filePath);
                    const nativePhoto = document.getElementById('nativePhoto');
                    nativePhoto.src = `file:///${filePath.replace(/\\/g, '/')}`;
                    nativePhoto.style.display = 'block';
                    console.log('Photo displayed');
                } else {
                    console.error('Error capturing photo:', errorMsg);
                    alert('Error capturing photo with native camera: ' + (errorMsg || 'Unknown error'));
                }
            });
        });

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

// Call initCamera when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded. Waiting for flashcontrol...');
    initCamera(flashcontrol);
});