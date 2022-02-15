const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-type', 'text/html');



    res.end();
});

const hostname = 'localhost';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});

