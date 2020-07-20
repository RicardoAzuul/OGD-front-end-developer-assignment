server.js has this:

 var random = Math.random();
        if (random  >= 0.8) {
            res.writeHead(503);
            res.end();

I think that is for the server randomly not working --> HTTP 503 = Service Unavailable
So: if the output of math.random is equal to larger than 0.8 (the range is 0 to almost 1), the server will give a Service Unavailable

Basically: almost 20 % of the time, the webserver will not work.


You can run the provided api server by running: `node apiserver/server.js`

http://localhost:8080/api/getbalance is the url of the app

You are free to use any 3rd party components, but if you do, please provide some reasoning for it.
