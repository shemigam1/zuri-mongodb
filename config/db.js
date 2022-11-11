const mongoose = require("mongoose");

async function connect() {
  mongoose.connect("mongodb://127.0.0.1/todo-app");

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  console.log("connected to mongodb");
}

module.exports = connect;
