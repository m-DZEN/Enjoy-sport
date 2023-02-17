const WebSocket = require('ws');

function convertMapToChatMessangesArr(someMap) {
  return Object.entries(Object.fromEntries(someMap));
}

function convertMapToChatUsersArr(someMap) {
  return Object.entries(Object.fromEntries(someMap)).map((el) => el[1]);
}

const wsServer = new WebSocket.WebSocketServer({ clientTracking: true, noServer: true });

wsServer.on('connection', (ws, req, chatUsersMap, chatMessangesMap) => {
  const { user } = req.session;
  const { userId, userLogin } = user;
  console.log('===>', { userId, userLogin });

  console.log('OPEN', 'wsServer.clients.size ===>', wsServer.clients.size);

  chatUsersMap.set(userId, { userId, userLogin });
  // console.log('chatUsersMap ===>', chatUsersMap);

  wsServer.clients.forEach((currentClient) => {
    currentClient.send(JSON.stringify({
      type: 'online',
      payload: {
        userId,
        userLogin,
        chatUsers: convertMapToChatUsersArr(chatUsersMap),
        chatMessanges: convertMapToChatMessangesArr(chatMessangesMap),
      },
    }));
  });

  ws.on('message', (data) => {
    const utfData = JSON.parse(data.toString('utf8'));
    // console.log('utfData ===>', utfData);

    const { type, payload } = utfData;

    switch (type) {
      case 'chatMessage':
        console.log('chatMessage >>> payload ===>', payload);

        if (chatMessangesMap.get(userId)) {
          const userMessanges = chatMessangesMap.get(userId);
          userMessanges.unshift(payload);
          chatMessangesMap.set(userId, userMessanges);
        } else {
          chatMessangesMap.set(userId, [payload]);
        }
        wsServer.clients.forEach((currentClient) => {
          currentClient.send(JSON.stringify({
            type: 'message',
            payload,
          }));
        });
        break;

      default:
        console.log('Unknown message type!');
        break;
    }
  });

  ws.on('close', () => {
    console.log('CLOSE', 'wsServer.clients.size ===>', wsServer.clients.size);
    chatUsersMap.delete(userId);
    wsServer.clients.forEach((currentClient) => {
      currentClient.send(JSON.stringify({
        type: 'offline',
        payload: {
          userId,
          userLogin,
          chatUsers: convertMapToChatUsersArr(chatUsersMap),
        },
      }));
    });
  });
});

module.exports = wsServer;
