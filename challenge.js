"use strict";

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

// create the count event emitter

counter.emit("count", [1, 2, 3, 4, 5]);
