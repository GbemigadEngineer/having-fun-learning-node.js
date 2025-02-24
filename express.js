const express = require("express");
const prApp = express();

prApp.get("/", (request, response) => {
  response.status(200).send("Hello, Express!");
});
prApp.get("/about", (request, response) => {
  response.status(200).send("This is the about page");
});
prApp.get("/contact", (request, response) => {
  response.status(200).send("Contact us at: contact@gmail.com");
});

prApp.get("/user/:name?", (request, response) => {
  console.log(request.params);
  if (request.params.name) {
    response.status(200).send(`Hello, ${request.params.name}`);
  } else {
    response.status(200).send("Hello, Guest, register with us Today!");
  }
});

const port = 4000;
prApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
