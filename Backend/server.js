const express = require("express");
const server = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/StudentRegistryDB", {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB connected!");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });

server.use(express.json());
server.listen(8000, function check(error) {
  if (error) {
    console.log("error");
  } else {
    console.log("startedddd");
  }
});
