const WebSocket = require('ws');

const wsServer = new WebSocket.WebSocketServer({ clientTracking: true, noServer: true });

wsServer.on('connection', (ws, req) => {
  const { user } = req.session;
  console.log('user ===>', user);
  console.log('wsServer.clients.size ===>', wsServer.clients.size);

  wsServer.clients.forEach((currentClient) => {
    currentClient.send(JSON.stringify({ type: 'online', payload: { ...user, clientsSize: wsServer.clients.size } }));
  });

  ws.on('message', (data) => {
    const utfData = JSON.parse(data.toString('utf8'));
    console.log('utfData ===>', utfData);
    const { type, payload } = utfData;

    switch (type) {
      case 'chatMessage':
        console.log('chatMessage >>> payload ===>', payload);
        break;
      default:
        console.log('Unknown message type!');
        break;
    }
  });

  ws.on('close', () => {
    console.log('CLOSE', 'wsServer.clients.size ===>', wsServer.clients.size);
    wsServer.clients.forEach((currentClient) => {
      currentClient.send(JSON.stringify({ type: 'offline', payload: { ...user, clientsSize: wsServer.clients.size } }));
    });
  });
});

module.exports = wsServer;
