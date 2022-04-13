const express = require("express");
const app = express();
const port = require("./config");
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
const axios = require("axios");

/*app.get("/y", function (request, response) {
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  response.render("index", {
    pageTitle: "Witaj w IT SPA2!",
  });
});*/

/*
axios.get('/views/database.json')
.then(res => console.log(res.data))
.catch(err => console.log(err))*/

const data = require("./views/database.json");
console.log(data.rooms[0]);
//const fs = require("fs");
//const newData = [{}]
//fs.writeFile("database.json", JSON.stringify())

const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.use("/src/js", express.static(path.join(__dirname, "./src/js")));
