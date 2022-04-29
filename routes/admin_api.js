const express = require("express");
const router = express.Router();

router.get("/", function (request, response, next) {
  response.send("admin area");
});

router.get("/test", function (request, response, next) {
  response.send("admin test");
});

router.post("/add-message", function (request, response) {
  /*const name = "";
  const surname = "";
  const message = "";*/
  request.checkBody("name", "Name must have a value".notEmpty());
  request.checkBody("surname", "Surname must have a value".notEmpty());
  request.checkBody("message", "Message must have a value".notEmpty());
  const name = request.body.name;
  const surname = request.body.surname;
  const message = request.body.message;
  const errors = request.validationErrors();
  if (errors) {
    console.log(log);
    response.render("partials/_foot", {
      errors: errors,
      name: name,
      surname: surname,
      message: message,
    });
  } else {
    console.log("Success");
  }
});

module.exports = router;
