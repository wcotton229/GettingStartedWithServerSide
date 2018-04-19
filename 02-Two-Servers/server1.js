var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;


function handleRequest1(request, response) {
<<<<<<< HEAD
    response.end('You are a great developer!');
    
=======
    var comments1 = ['You are cool!', 'Good Job!', 'Keep it up!'];
    var randomComps = comments1[Math.floor(Math.random() * 3)];
    response.end(randomComps);
>>>>>>> a5aa0ac5c662b1d6709bd251f4ff8cdd7476ca7c
}
function handleRequest2(request, response) {
    var comments2 = ['Oh, do not do that!', 'You are doing a poor job!', 'Get a life!'];
    var randomInsults = comments2[Math.floor(Math.random() * 3)];
    response.end(randomInsults);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
console.log('Listening on PORT: '+ PORT1);

});

server2.listen(PORT2, function() {
    console.log('Listening on PORT: '+ PORT2);
    
    });





