let ws;
let connected = false;

function connectWebSocket() {
  if (ws && ws.readyState < 2) {
    console.info('Connection has already been established.');
    return false;
  }
  ws = new WebSocket('ws://localhost:38888', 'wamp');
  ws.onmessage = parseMessage;
  ws.onclose = (d) => console.log('Server has closed the connection.', d);

  $("#status-container").remove();
  return true;
}

function parseMessage(data) {
  let msg = JSON.parse(data.data);
  if(msg._type !== 'json') {
    console[msg._type].apply(null, msg.args.map(e => e.replace(/\u001b\[\d\dm/g, '')));
    return;
  }
  console.log(msg.args);
}

function getInputList() {
  if (!ws || ws.readyState > 1) {
    console.error('Error! Connection has not been established.');
    return;
  }

  ws.onmessage = (data) => {
    let msg = JSON.parse(data.data);
    displayInputList(msg.args[0]);
    ws.onmessage = parseMessage;
  }

  ws.send('list input json');
}

function setInputDev(index) {
  if (!ws || ws.readyState > 1) {
    console.error('Error! Connection has not been established.');
    return;
  }

  ws.send(`use input index ${index}`);
}

function startStreamInput() {
  if (!ws || ws.readyState > 1) {
    console.error('Error! Connection has not been established.');
    return false;
  }

  $("#input-dev-list").attr("disabled", true);
  $("#streaming-button").text("Stop Streaming Input");
  ws.send('connect');
  return true;
}

function stopStreamInput() {
  if (!ws || ws.readyState > 1) {
    console.error('Error! Connection has not been established.');
    return false;
  }

  $("#input-dev-list").attr("disabled", false);
  $("#streaming-button").text("Start Streaming Input");
  ws.send('disconnect');
  return true;
}

/* web DOM rendering funtions */
function displayInputList(inputs) {
  var i=0;
  console.log(`There are ${inputs.length} inputs:`);
  makeOption = (index, name) => `<option onclick="setInputDev(${index})">${name}</option>`;
  $("#input-dev-list").children().remove();
  inputs.forEach(name => $("#input-dev-list").append(makeOption(i++, name)));
  setInputDev(0);

  $("#input-dev-list").attr("disabled", false);
}

function streamButton() {
  if (!connected) {
    if (!startStreamInput()) return;
  } else {
    if (!stopStreamInput()) return;
  }
  connected = !connected;
}
