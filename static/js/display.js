function renderWebSocketConnection() {
  connectWebSocket();
  setTimeout(getInputList, 1000);
}

setTimeout(renderWebSocketConnection, 1000);
