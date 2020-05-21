function renderWebSocketConnection() {
  connectWebSocket();
  setTimeout(getInputList, 2000);
}

setTimeout(renderWebSocketConnection, 2000);
