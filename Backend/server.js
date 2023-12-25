var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose
  .connect("mongodb://localhost:27017/StudentRegistryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connectedddd!!!!!!!!!!!");

    server.use(cors());
    server.use(express.json());
    server.use(routes);

    server.listen(8000, function check(error) {
      if (error) {
        console.log("errorr");
      } else {
        console.log("startedddddd");
      }
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
