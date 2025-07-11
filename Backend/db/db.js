const mongoose = require("mongoose");

function connectToDb() {
  const dbURI = process.env.DB_CONNECT;

  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectToDb;