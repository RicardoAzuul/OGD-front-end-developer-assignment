var expect  = require('chai').expect;
var request = require('request');

it('API', function(done) {
    request('http://localhost:8080/api/getbalance' , function(error, response, body) {
        expect(body).to.contain("account");
        done();
    });
});