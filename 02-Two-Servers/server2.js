var http = require('http');
var PORT = 7500;

function handleRequest(request, response) {
    response.end('You need to stop getting distracted');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
console.log('Listening on PORT: '+ PORT);



});