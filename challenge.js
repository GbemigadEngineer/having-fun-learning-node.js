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
