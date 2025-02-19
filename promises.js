"use strict";

const superagent = require("superagent");
const fs = require("fs");
const { constrainedMemory } = require("process");
const { resolve } = require("path");
const { reject } = require("superagent/lib/request-base");

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

// Coding challenge 2

// Task 1
const greeting = (seconds, greet) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(greet);
    }, seconds * 1000);
  });
};

greeting(3, "Hello from the other side!")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
