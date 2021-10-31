const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");

// ミドルウェア(middleware)
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    content: "当ホームページへようこそ！",
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    content: "コンテンツです。",
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000);