const express = require("express");
const app = express();
const port = require("./config");
const path = require("path");
const hbs = require("hbs");

//app.use(express.static("views"));

const apiRouter = require("./routes/api");
app.use("/", apiRouter);

app.listen(port, (error) => {
  if (error) {
    return console.log(
      "Jejda! Serwer NIE działa z powodu błędu ",
      error,
      " :("
    );
  }
  console.log("Serwer działa na porcie ", port);
});

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"), (err) => {});

const axios = require("axios");
/*
axios.get('/views/database.json')
.then(res => console.log(res.data))
.catch(err => console.log(err))*/

const data = require("./src/database.json");
console.log(data.rooms[0]);
//const fs = require("fs");
//const newData = [{}]
//fs.writeFile("database.json", JSON.stringify())


const { allowedNodeEnvironmentFlags } = require("process");
app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.use("/src/js", express.static(path.join(__dirname, "./src/js")));
