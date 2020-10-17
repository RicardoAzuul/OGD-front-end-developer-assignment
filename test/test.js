var expect  = require('chai').expect;
var request = require('request');

describe ('API is serving data', function() {
    it('status', function(done){
        request('http://localhost:8080/api/getbalance', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe ('index.html is present in build folder', function() {
    it('status', function(done){
        request('http://localhost:3000/index.html', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe ('css is present in build folder', function() {
    it('status', function(done){
        request('http://localhost:3000/css/main.css', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe ('js is present in build folder', function() {
    it('status', function(done){
        request('http://localhost:3000/js/app.js', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
