const express = require("express");
const fs = require("fs");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8100;
app.set("view engine", "hbs");

//---------------- [ ========> middleware <======== ] ---------------\\

//========> middleware function
app.use((req, res, next) => {
  var now = new Date();
  var log = `${new Date()} : ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("Server.Log", log + "\n", err => {
    if (err) {
      console.log("Probleme d'ecrit sur le fichier");
    }
  });
  next();
});

//========> this function whene the site in maintenace
// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

//---------------- use all url after middleware ----------------\\

// declare folder public as static folder
app.use(express.static(__dirname + "/public"));

//declare folder layers as partials folder
hbs.registerPartials(__dirname + "/views/layers");

// declare all helpers like getter and setter
hbs.registerHelper("gethalpper01", () => {
  return new Date();
});

app.get("/", (req, res) => {
  //res.send("<h1>Abdellah Bouskine</h1>");
  res.render("home.hbs", {
    title: "Home Page",
    name: "Home"
    // date: new Date()
  });
});
app.get("/about", (req, res) => {
  //res.send("<h1>Abdellah Bouskine</h1>");
  res.render("about.hbs", {
    title: "About Page",
    name: "About"
    // date: new Date()
  });
});

app.get("/name", (req, res) => {
  res.send("<h1>abdellah Bouskine</h1>");
});

app.listen(port, () => {
  console.log("you are connecte in server (port:8100)");
});
