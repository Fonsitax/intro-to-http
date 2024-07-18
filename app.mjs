// how to create a simple server that listens on port 3000 and returns a response of "Hello, World!" 
//when a request is made to the server.

import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! /n');
});

const port = process.env.PORT || 3000;

server.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
);
