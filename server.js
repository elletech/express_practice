const express = require("express");
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
// ミドルウェア(middleware)
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    content: "当ホームページへようこそ！"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    content: "コンテンツです。"
  });
});

app.listen(3000);