"use strict";

const { count } = require("console");
// Task 1
// require the events modules
const Emiter = require("events");

// create an instance of the events module
const greetEmiter = new Emiter();

// create listners for the greet event instance
greetEmiter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

greetEmiter.on("greet", (name) => {
  console.log(`Nice to meet you ${name}`);
});

// create the greet event emiter
greetEmiter.emit("greet", "Gbemiga");

// Task 2
// create a new instances for that event module

const counter = new Emiter();

// create a listners for the count event instance

// listner one logs all the numbers in the array
counter.on("count", (numarr) => {
  numarr.forEach((element) => {
    console.log(element);
  });
});
// listner two logs the squared values of all the numbers in the array
counter.on("count", (numarr) => {
  numarr.forEach((element) => {
    console.log(element ** 2);
  });
});

// task 2 correction:
const EventEmitter = require("events");

class CountEmitter extends EventEmitter {}

const countEmitter = new CountEmitter();

function logNumber(number) {
  console.log("Number:", number);
}

function logSquare(number) {
  console.log("Square:", number ** 2);
}

// create the listners
countEmitter.on("count", logNumber);
countEmitter.on("count", logSquare);

const arrnum = [1, 2, 3, 4, 5];
arrnum.forEach((num) => {
  countEmitter.emit("count", num);
});

// Task 3

class LoginEmitter extends EventEmitter {}

const loginEmitter = new LoginEmitter();

loginEmitter.once("first-login", () => {
  console.log("First login event");
});

loginEmitter.emit("first-login");

// Task 4

// create an error class that extends the EventEmitter class
class ErrorEmiter extends EventEmitter {}

// create an instance of the error class
const errorEmiter = new ErrorEmiter();

// create a listner for the error event instance
errorEmiter.on("error", (error_statement) => {
  console.log(`You are encountering ${error_statement} error`);
});

// determine error type
function errortype(error) {
  if (error === "Syntax" || error === undefined) {
    return "Syntax";
  } else if (error === "Reference") {
    return "Reference";
  }
}

// create a emiter for the error event instance
errorEmiter.emit("error", errortype("Reference"));

// taks 4
class DataEmitter extends EventEmitter {}

const dataEvent = new DataEmitter();

dataEvent.on("data", (data) => {
  console.log(`${data} is the data emitted more than once`);
});
dataEvent.once("data", (data) => {
  console.log(`${data} is the data emitted only once`);
});
dataEvent.on("data", (data) => {
  console.log(`${data} is the data emitted more than once`);
});

dataEvent.emit("data", "Data event");
dataEvent.emit("data", "Data event - second emission");

// Coding challenges on streams

// challenge 1

const fs = require("fs");

const readable = fs.createReadStream("output.json");

readable.on("error", (err) => {
  console.error("Error reading the JSON file:", err);
});

const writable = fs.createWriteStream("output.txt");

writable.on("error", (err) => {
  console.log("Error writing to the file:", err);
});

const piped = readable.pipe(writable);

readable.pipe(writable).on("finish", () => {
  console.log("Write completed");
});

//  task 2
const server = require("http").createServer();

server.on("request", (req, res) => {
  const readbig = fs.createReadStream("bigfile.txt");

  readbig.once("error", (err) => {
    console.error("Error reading the big file:", err);
  });
  readbig.pipe(res).on("finish", () => {
    console.log("Write completed");
  });
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is listening on port 5000");
});

//  task 3

const transformRead = fs.createReadStream("output.json");
const writables = fs.createWriteStream("output.txt");
transformRead.on("data", (chunk) => {
  writables.write(chunk.toString().toUpperCase());
});

transformRead.on("end", () => {
  writables.end();
});

transformRead.on("error", (err) => {
  console.log("Error reading the file:", err);
});

writables.on("error", (err) => {
  console.log("Error writing to the file:", err);
});

// task 4

// const writeCLIs = fs.createWriteStream("log.txt");

// const readlineCLI = fs.createReadStream(process.stdin);

// readlineCLI.on("data", (chunk) => {
//   writeCLIs.write(chunk);
//   if (chunk.toString().trim() === "exit") {
//     writeCLIs.end();
//   }
// });

// readlineCLI.on("error", (err) => {
//   console.log("Error reading the file:", err);
// });

// readlineCLI.on("end", () => {
//   writeCLIs.end();
// });

// correction for task 4

const readline = require("readline");

// create a writable stream for logging

const writeCLI = fs.createWriteStream("log.txt", { flags: "a" });

// setup CLI input reading

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Type something (type 'exit' to quit):`);

rl.on("line", (input) => {
  writeCLI.write(input + "\n");

  if (input.trim().toLocaleLowerCase() === "exit") {
    console.log("Goodbye!");
    writeCLI.end();
    rl.close();
    process.exit();
  }
});

rl.on("error", (err) => {
  console.log("Error reading the input:", err);
});

// Task 5
const { pipeline } = require("stream");

server.on("request", (req, res) => {
  pipeline(fs.createReadStream("bigfile.txt"), res, (err) => {
    if (err) {
      console.error("Pipeline failed:", err);
    } else {
      console.log("Pipeline succeeded");
    }
  });
});
