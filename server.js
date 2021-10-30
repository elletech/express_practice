const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs")

// ミドルウェア(middleware)
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
  res.send({
    name: "太郎",
    age: 20
  });
});

app.listen(3000);