module.exports = {
  homepage: function (request, response) {
    const data = {
      pageTitle: "Sprawdź koszyk w IT SPA!",
      title: "IT SPA"
    }
    response.render("cart", data)
  },
};
