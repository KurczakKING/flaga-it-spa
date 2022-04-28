const express = require("express");
const router = express.Router();

router.get("/", function (request, response, next) {
  response.send("admin area");
});

router.get("/test", function (request, response, next) {
  response.send("admin test");
});

router.get("/add-message", function (request, response) {
  const name = "";
  const surname = "";
  const message = "";
  response.render("admin/add_message", {
    name: name,
    surname: surname,
    message: message,
  });
});

module.exports = router;
