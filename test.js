const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const route = req.url;

  if (route === "/get") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      "Mikel: I like eggs!\nTope: I am a backend Developer\nRaj: I support Manchester United!"
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Error 404! Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is now listening for requests at port 3000!");
});
