const express = require("express");
const router = express.Router();

router.get("/", function (request, response, next) {
  response.send("admin area");
});

router.get("/test", function (request, response, next) {
  response.send("admin test");
});

module.exports = router;
