const http = require("http");
const url = require("url");

const slugify = require("slugify");

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

// const server2 = http.createServer((request, response) => {
//   response.end(index.html); // This will throw an error because index.html is not defined. SO you cant just create an html file and expect it to be rendered.
// });

// server2.listen(5000, hostname, () => {
//   console.log(`Server running at http://${hostname}:5000/`);
// });

// routing in nodejs
const server3 = http.createServer((request, response) => {
  routename = request.url;
  if (routename === "/" || routename === "/home") {
    response.end("Welcome to the homepage");
  } else if (routename === "/services") {
    response.end(
      "<h1>Our services</h1>\n<ul><li>Web development</li><li>Backend development</li><li>Cooking</li></ul>"
    );
  } else {
    response.end("Error page not found");
  }
});

server3.listen(5000, hostname, () => {
  console.log(`Server running at http://${hostname}:5000/`);
});
