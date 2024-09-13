import React, { useState, useRef, useEffect } from 'react';

const PhotoApp = () => {
  const [webSocket, setWebSocket] = useState(null);
  const [hasFlash, setHasFlash] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [error, setError] = useState('');
  const [brightness, setBrightness] = useState(100);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Initialize WebSocket connection when the component mounts
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:7210/ws'); // Change this URL to your WebSocket server's address
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      console.log('Received from server: ', event.data);
      // Here, you could handle any incoming messages (e.g., a photo path)
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setWebSocket(socket);

    // Cleanup WebSocket on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const capturePhotoViaWebSocket = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send('TakePhoto'); // Send message to take a photo via WebSocket
    } else {
      setError('WebSocket connection is not open');
    }
  };

  const toggleFlashViaWebSocket = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      const newFlashState = !flashOn;
      const flashMessage = newFlashState ? 'FlashOn' : 'FlashOff';
      webSocket.send(flashMessage); // Send flash toggle message via WebSocket
      setFlashOn(newFlashState); // Update the local flash state
    } else {
      setError('WebSocket connection is not open');
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
          onClick={capturePhotoViaWebSocket}
        >
          Capture Photo (via WebSocket)
        </button>
        
        <button 
          className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${flashOn ? 'opacity-50' : ''}`}
          onClick={toggleFlashViaWebSocket}
        >
          {flashOn ? 'Turn Flash Off (via WebSocket)' : 'Turn Flash On (via WebSocket)'}
        </button>
      </div>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
    </div>
  );
};

export default PhotoApp;
