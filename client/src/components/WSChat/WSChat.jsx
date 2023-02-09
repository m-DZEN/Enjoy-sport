import React, { useEffect } from 'react';

export default function WSChat() {
  const socket = new WebSocket('ws://localhost:3001/wschat');
  socket.onopen = () => {
    console.log('SOCKET OPEN');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('WS MESSAGE', data);
  };

  socket.onclose = () => {
    console.log('SOCKET CLOSE');
  };

  socket.onerror = (error) => {
    console.log(error);
  };

  useEffect(() => (() => {
    socket.close();
    console.log('useEffect CLOSE');
  }), []);
  return (
    <div>WSChat</div>
  );
}
