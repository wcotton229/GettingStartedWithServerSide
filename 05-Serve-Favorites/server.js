// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/food":
            return fs.readFile(__dirname + "./index.html", function (err, data) {

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
        // case "/Movie":
        //     return fs.readFile(__dirname + "/index.html", function (err, data) {

        //         res.writeHead(200, { "Content-Type": "text/html" });
        //         res.end(data);
        //     });
        default:
            return fs.readFile(__dirname + "./home.html", function (err, data) {

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }
}
// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});

