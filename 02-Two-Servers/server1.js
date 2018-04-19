var http = require('http');
var PORT = 7000;

function handleRequest(request, response) {
    response.end('You are a great developer!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
console.log('Listening on PORT: '+ PORT);




});