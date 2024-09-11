import React, { useState, useRef, useEffect } from 'react';

const PhotoApp = () => {
  const [hasFlash, setHasFlash] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [error, setError] = useState('');
  const [brightness, setBrightness] = useState(100);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment',
            advanced: [{ torch: true }]  // Request torch capability
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        
        const track = stream.getVideoTracks()[0];
        const capabilities = track.getCapabilities();
        const settings = track.getSettings();

        // Check if torch is supported and currently available
        setHasFlash('torch' in capabilities && 'torch' in settings);

        // If ImageCapture API is available, use it for more accurate flash detection
        if ('ImageCapture' in window) {
          const imageCapture = new ImageCapture(track);
          const photoCapabilities = await imageCapture.getPhotoCapabilities();
          setHasFlash(photoCapabilities.fillLightMode.includes('flash'));
        }
      } catch (err) {
        setError('Failed to access camera: ' + err.message);
      }
    }
    setupCamera();
  }, []);

  const toggleFlash = async () => {
    if (!hasFlash) return;
    
    const stream = videoRef.current.srcObject;
    const track = stream.getVideoTracks()[0];
    const newFlashState = !flashOn;
    
    try {
      await track.applyConstraints({
        advanced: [{ torch: newFlashState }]
      });
      setFlashOn(newFlashState);
    } catch (err) {
      setError('Failed to toggle flash: ' + err.message);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.filter = `brightness(${brightness}%)`;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
      setCapturedImage(imageDataUrl);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Web Camera App</h1>
      
      <div className="mb-4">
        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '500px' }} />
      </div>
      
      <div className="mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={capturePhoto}
        >
          Capture Photo
        </button>
        
        {hasFlash && (
          <button 
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${flashOn ? 'opacity-50' : ''}`}
            onClick={toggleFlash}
          >
            {flashOn ? 'Turn Flash Off' : 'Turn Flash On'}
          </button>
        )}
      </div>
      
      {!hasFlash && (
        <div className="mb-4">
          <p className="text-yellow-600 mb-2">Note: Flash control is not available on this device.</p>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brightness">
            Brightness Adjustment:
          </label>
          <input
            type="range"
            id="brightness"
            name="brightness"
            min="0"
            max="200"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            className="w-full"
          />
        </div>
      )}
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
      
      {capturedImage && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Captured Photo:</h2>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%', width: '500px' }} />
        </div>
      )}
      
      <canvas ref={canvasRef} style={{ display: 'none' }} width={1280} height={720} />
    </div>
  );
};

export default PhotoApp;