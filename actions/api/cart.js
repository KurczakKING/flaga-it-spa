module.exports = {
  homepage: function (request, response) {
    response.render("cart", {
      pageTitle: "Sprawdź koszyk!",
    });
  },
};
