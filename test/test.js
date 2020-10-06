var expect  = require('chai').expect;
var request = require('request');

describe ('API', function() {
    it('status', function(done){
        request('http://localhost:8080/api/getbalance', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe ('Account Info', function() {
    it('status', function(done){
        request('http://localhost:8080/api/getbalance', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe ('Transactions', function() {
    it('status', function(done){
        request('http://localhost:8080/api/getbalance', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
