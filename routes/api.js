const express = require("express");
const router = express.Router();
const home = require("./home");
const rooms = require("./rooms");
const treatments = require("./treatments");
const cart = require("./cart");

/*const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = require("../src/database.json");*/

router.get("/test", function (request, response, next) {
  response.send("test");
});

router.get("/", home.homepage);
router.get("/rooms", rooms.homepage);
/*router.get("/rooms", function (req, res) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.send(err);
    });
});*/
router.get("/treatments", treatments.homepage);
router.get("/cart", cart.homepage);
/*router.get("/a", function (request, response) {
  response.render("index", {
    pageTitle: "Witaj w IT SPA!",
  });
});*/

router.post("/", function (request, response) {
  let myJson = request.body; // your JSON
  let myValue = request.body.myKey; // a value from your JSON
  response.send(myJson); // echo the result back
});

module.exports = router;
