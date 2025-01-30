const http = require("http");
const url = require("url");
const fs = require("fs");

// Read the JSON file asynchronously
fs.readFile("./output.json", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the JSON file:", err);
    return;
  }

  // Parse the data from the JSON file
  const dataObj = JSON.parse(data);

  // Create a server
  const server = http.createServer((req, res) => {
    const route = req.url;
    const parsedUrl = url.parse(route, true); // Parse the URL to extract query parameters or path segments

    if (parsedUrl.pathname === "/get") {
      // Handle the /get route
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(
        "Mikel: I like eggs!\nTope: I am a backend Developer\nRaj: I support Manchester United!"
      );
    } else if (parsedUrl.pathname === "/get/post") {
      // Handle the /get/post route
      const postId = parsedUrl.query.id; // Extract the id from the query string
      if (!postId) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Error: Missing post ID in the query string.");
        return;
      }

      // Find the post with the matching ID
      const post = dataObj.find((item) => item.id === parseInt(postId));
      if (post) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(post.body);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Error 404! Post not found.");
      }
    } else if (parsedUrl.pathname === "/get/create") {
      fs.readFile("testform.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Error 404! Page not found.");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      // Handle invalid routes
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Error 404! Page not found.");
    }
  });

  server.listen(3000, "127.0.0.1", () => {
    console.log("Server is now listening for requests at port 3000!");
  });
});
