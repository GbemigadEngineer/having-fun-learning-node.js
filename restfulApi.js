"use strict";
const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());
let data = JSON.parse(fs.readFileSync("./data.json"));
if (data.length === 0) {
  data = [];
}
app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      result: data.length,
      users: data,
    },
  });
});

app.get("/api/v1/users/:id([0-9]+)", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((el) => el.id === id);
  if (user) {
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
});

app.get("/api/v1/users/role/:role?", (req, res) => {
  const role = req.params.role;
  const user = data.filter((el) => el.role === role); //Use filter incase multiple users has that role
  if (user.length > 0) {
    res.status(200).json({
      status: "success",
      data: {
        users: user,
      },
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        message: "User not found",
        users: [],
      },
    });
  }
});

app.post("/api/v1/register", (req, res) => {
  const id = data[data.length].id + 1;
  const newUser = Object.assign({ id }, req.body);
  data.push(newUser);
  fs.writeFile("./data.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json({
        status: "fail",
        message: "Internal server error",
      });
    }
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  });
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
