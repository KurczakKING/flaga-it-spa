const express = require("express");
const port = 3000;
const app = express();
app.set("view engine", "hbs");
app.get("/", function (request, response) {
  response.render("index");
});

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

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));