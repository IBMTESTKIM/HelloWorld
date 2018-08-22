const http = require('http');

const hostname = '0.0.0.0';
const port=9900;

const server = http.createServer((req, res) => {
	res.statusCode=200;
	res.setHeader('Content-Type', 'text/plain');
	console.log("Connected .. \n");
	res.end("Hello world \n");
});

server.listen(port, hostname, () => {
	console.log("Server Listening ...\n");
	console.log(hostname + ":" + port);
});

console.log("Script Waiting ... ");
