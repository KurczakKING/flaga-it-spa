module.exports = {
  homepage: function (request, response) {
    response.render("home", {
      pageTitle: "Witaj w IT SPA!",
    });
  },
};
