const express = require("express");
const router = express.Router();
const home = require("../actions/api/home");
const rooms = require("../actions/api/rooms");
const treatments = require("../actions/api/treatments");
const cart = require("../actions/api/cart");

/*const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = require("../src/database.json");*/

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

module.exports = router;
