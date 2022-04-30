const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const home = require("./routes/home");
const rooms = require("./routes/rooms");
const treatments = require("./routes/treatments");
const cart = require("./routes/cart");

const users = [];

router.get("/test", function (request, response, next) {
  response.send("test");
});
router.get("/", home.homepage);
router.get("/logging", (request, response) => {
  response.render("logging");
});
router.post("/logging", (request, response) => {
  response.render("logging");
});
router.get("/register", (request, response) => {
  response.render("register");
});
router.post("/register", async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: request.body.name,
      surname: request.body.name,
      email: request.body.email,
      password: hashedPassword,
    });
    response.redirect("/login");
  } catch {
    response.redirect("/register");
  }
  console.log(users);
});
router.get("/rooms", rooms.homepage);
router.get("/treatments", treatments.homepage);
router.get("/cart", cart.homepage);
router.get("/contact", (request, response) => {
  response.render("contact");
});

router.post("/", function (request, response) {
  let myJson = request.body;
  let myValue = request.body.myKey;
  response.send(myJson);
});

module.exports = router;
