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

// Task 2

const downloadfile = (size) => {
  return new Promise((resolve, reject) => {
    if (size > 50) {
      return setTimeout(() => {
        reject(new Error("You cannot download a file greater than 50MB!"));
      }, 2 * 1000);
    }
    setTimeout(() => {
      resolve("File downloaded successfully!");
    }, 2 * 1000);
  });
};

// downloadfile(200)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

function calling(size) {
  return downloadfile(size)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

calling(10);

//  Complete module tasks

// Task 1
// create a function
const fakeDatabase = {
  1: { id: 1, name: "John Doe" },
  2: { id: 2, name: "Jane Smith" },
  3: { id: 3, name: "Alice Johnson" },
};

function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    if (id < 1) {
      reject(new Error("Invalid User ID!"));
    }
    if (fakeDatabase[id] === undefined) {
      reject(new Error("Object Does not exist in database"));
    }
    setTimeout(() => {
      resolve(fakeDatabase[id]);
    }, 2 * 1000);
  });
}

fetchUserData(2)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });

// task 2

function delayedMessage(message, delay) {
  return new Promise((resolve, reject) => {
    if (message === undefined || message === null) {
      return reject(new Error("Message is missing! Please input a message"));
    }
    if (typeof delay !== "number")
      return reject(new Error("Delay should be a number"));

    setTimeout(() => {
      resolve(message);
    }, delay * 1000);
  });
}

delayedMessage("We are the future of technology, we are genex tech!", 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

const fetchMultipleUsers = async (ids) => {
  try {
    const allPro = ids.map((element) => fetchUserData(element));
    const all = await Promise.all(allPro);
    console.log(all);
  } catch (err) {
    console.log(err);
  }
};

fetchMultipleUsers([1, 2, 3]);
