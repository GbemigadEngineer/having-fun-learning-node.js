const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const route = req.url;
  if (route === "/get") {
    res.end(
      "Mikel: I like eggs!\n Tope: I am a backend Developer\n Raj: I support manchester United!"
    );
  } else {
    res.end("Error 404! Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is now liztening for requests at port 3000!");
});
