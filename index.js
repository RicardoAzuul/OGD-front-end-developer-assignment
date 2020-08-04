var http = require('http');
var request = require('request');

var request_body = undefined;

request('http://localhost:8080/api/getbalance', function(error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log(body);
    request_body = body;
    console.log(request_body);
});