module.exports = {
  homepage: function (request, response) {
    const data = {
      pageTitle: "Zobacz pokoje w IT SPA!",
      title: "IT SPA"
    }
    response.render("rooms", data)
  },
};
