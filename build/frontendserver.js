const express = require('express')
const app = express()
const port = 3000

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





/* var fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); */