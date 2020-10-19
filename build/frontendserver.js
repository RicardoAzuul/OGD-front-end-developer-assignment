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
  console.log(`Frontendserver listening at http://localhost:${port}`)
})