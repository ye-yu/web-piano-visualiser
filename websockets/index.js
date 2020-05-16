const WSS = require('websocket').server;
const HTTP = require('http');

const SERVER = HTTP.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
SERVER.listen(38888, function() {
    console.log((new Date()) + ': Server is listening on port 38888');
});

const WSS_INSTANCE = new WSS({
    httpServer: SERVER,
    autoAcceptConnections: false
});

WSS_INSTANCE.on('request', function(request) {
    var connection = request.accept('wamp', request.origin);
    console.log((new Date()) + ' Connection accepted from ' + request.origin);
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
