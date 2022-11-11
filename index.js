const express = require("express");
const taskRoutes = require("./src/router/taskRoutes");
const { json } = require("express");
const connect = require("./config/db");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1/todo-app");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

connect();

const app = express();
app.use(json());
app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Zuri");
});

app.listen(3000, () => {
  console.log("server up");
});
