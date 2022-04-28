const express = require("express");
const path = require("path");
const app = express();
const port = require("./config");
const apiRouter = require("./routes/api");
app.use("/", apiRouter);
const adminApi = require("./routes/admin_api");
app.use("/admin/api", adminApi);
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

const hbs = require("hbs");
app.set("views", "./src/views");
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "src/views/partials"), (err) => {});

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/scss", express.static(path.join(__dirname, "./scss")));
app.use("/src/js", express.static(path.join(__dirname, "./src/js")));

const mongoose = require("mongoose");
const configDB = require("./src/config/database");
mongoose.connect(configDB.database);
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "NIE udało się połączyć z MongoDB. Error: ")
);
db.once("open", function () {
  console.log("Połączenie z MongoDB działa! :)");
});

/*
connectDB().catch((error) => console.log(error));
async function connectDB() {
  await mongoose.connect("mongodb://localhost/flaga-it-spa");*/

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());

const bodyparser = require("body-parser");
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

const axios = require("axios");
/*
axios.get('/views/database.json')
.then(res => console.log(res.data))
.catch(err => console.log(err))*/

//const data = require("./src/database.json");
//console.log(data.rooms[0]);

//const fs = require("fs");
//const newData = [{}]
//fs.writeFile("database.json", JSON.stringify())
