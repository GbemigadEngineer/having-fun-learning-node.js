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
