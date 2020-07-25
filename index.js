var http = require('http');
//var request = require ('request');
//var url =  require('url');

$.getJSON( "http://localhost:8080/api/getbalance", function(json) {
    console.log( "JSON Data: " + json);
   });