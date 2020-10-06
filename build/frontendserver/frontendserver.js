var http = require('http');
var page = require('./index.html');
var port = 80;

var server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.url === '/accountbalance') {


            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(page);
            //res.write(JSON.stringify(result, 0, 4));
            res.end();

    } 
});

server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});