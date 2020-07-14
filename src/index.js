const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

var app = express();
app.use(morgan('dev'));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

const uri =
  "mongodb+srv://sacdesarrollador:<password>@cluster0.ddmls.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
