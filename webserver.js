const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Creating another server.

const server2 = http.createServer((request, response) => {
  response.end(index.html); // This will throw an error because index.html is not defined. SO you cant just create an html file and expect it to be rendered.
});

server2.listen(5000, hostname, () => {
  console.log(`Server running at http://${hostname}:5000/`);
});
