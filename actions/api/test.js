module.exports = {
  homepage: function(request, response) {
    response.render("index", {
      pageTitle: "Witaj w IT SPA!",
    });
  },
};
