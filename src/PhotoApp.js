import React, { useState, useEffect } from 'react';

const PhotoApp = () => {
  const [webSocket, setWebSocket] = useState(null);
  const [flashOn, setFlashOn] = useState(false);
  const [error, setError] = useState('');
  const [latestPhoto, setLatestPhoto] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    const socketUrl = 'wss://localhost:7210/ws'; 
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log('WebSocket connection established');
      setConnectionStatus('Connected');
      setError('');
    };

    socket.onmessage = (event) => {
      console.log('Received from server: ', event.data);
      handleServerMessage(event.data);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
      setConnectionStatus('Disconnected');
      setError('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setError('WebSocket error occurred');
    };

    setWebSocket(socket);

    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);

  const handleServerMessage = (message) => {
    try {
      const data = JSON.parse(message);
      switch (data.type) {
        case 'photo':
          setLatestPhoto(data.filePath);
          break;
        case 'flash':
          setFlashOn(data.status === 'on');
          break;
        case 'error':
          setError(data.message);
          break;
        default:
          console.warn('Unknown message type:', data.type);
      }
    } catch (error) {
      console.error('Error parsing server message:', error);
      setError('Error processing server message');
    }
  };

  const capturePhotoViaWebSocket = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(JSON.stringify({ command: 'TakePhoto' }));
      console.log('Sent TakePhoto command');
    } else {
      setError('WebSocket connection is not open');
      console.error('WebSocket is not open. ReadyState:', webSocket ? webSocket.readyState : 'undefined');
    }
  };

  const toggleFlashViaWebSocket = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      const newFlashState = !flashOn;
      const command = newFlashState ? 'FlashOn' : 'FlashOff';
      webSocket.send(JSON.stringify({ command }));
      console.log(`Sent ${command} command`);
    } else {
      setError('WebSocket connection is not open');
      console.error('WebSocket is not open. ReadyState:', webSocket ? webSocket.readyState : 'undefined');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Web Camera App</h1>
      
      <div className="mb-4">
        <p>Connection Status: {connectionStatus}</p>
      </div>
      
      <div className="mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={capturePhotoViaWebSocket}
        >
          Capture Photo
        </button>
        
        <button 
          className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${flashOn ? 'opacity-50' : ''}`}
          onClick={toggleFlashViaWebSocket}
        >
          {flashOn ? 'Turn Flash Off' : 'Turn Flash On'}
        </button>
      </div>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
      
      {latestPhoto && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Latest Captured Photo:</h2>
          <img src={`file://${latestPhoto}`} alt="Captured" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default PhotoApp;