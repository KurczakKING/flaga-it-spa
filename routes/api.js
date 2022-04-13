const express = require("express");
const router = express.Router();
const testActions = require("../actions/api/test");

router.get("/", testActions.homepage);
/*router.get("/a", function (request, response) {
  response.render("index", {
    pageTitle: "Witaj w IT SPA!",
  });
});*/

module.exports = router;
