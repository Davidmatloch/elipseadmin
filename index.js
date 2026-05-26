const http = require("http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain; charset=utf-8");
	res.end("ok");
});

server.listen(port, () => {
	console.log(`elipseadmin listening on ${port}`);
});
