const express = require("express");
const path = require("path");
const app = express();
const port = require("./src/config/config");
const apiRouter = require("./src/server/api");
app.use("/", apiRouter);
const adminApi = require("./src/server/admin_api");
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

app.use("/src/assets", express.static(path.join(__dirname, "./src/assets")));
app.use("/src/scss", express.static(path.join(__dirname, "./src/scss")));
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

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    exended: false,
  })
);
app.use(bodyParser.json());

const session = require("express-session");
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

const expressValidator = require("express-validator");
app.use(
  expressValidator({
    errorFormatter: function (param, msg, value) {
      const namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value,
      };
    },
  })
);

app.use(require("connect-flash")());
app.use(function (request, response, next) {
  response.locals.messages = require("express-messages")(request, response);
  next();
}); 