"use strict";

const superagent = require("superagent");
const fs = require("fs");
const { constrainedMemory } = require("process");

// fetch the data from the API
fetch("https://official-joke-api.appspot.com/random_joke")
  //   if successful in getting the data
  .then((response) => {
    response.json().then((result) => {
      console.log(`${result.setup}, ${result.punchline}`);
      const jokeObj = {
        setup: result.setup,
        punchline: result.punchline,
        id: result.id,
      };
      fs.writeFile("output2.json", JSON.stringify(jokeObj, null, 2), (err) => {
        console.log(err);
      });
    });
  })
  .catch((err) => {
    console.log("error getting data from API");
  });

//    Another task

const fS = require("fs").promises;

//  use fs. promises.readfile() to read a file

fS.readFile("output.txt", "utf8", (err, data) => {})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


