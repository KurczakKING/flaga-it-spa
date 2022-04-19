module.exports = {
  homepage: function (request, response) {
    response.render("rooms", {
      pageTitle: "Zobacz pokoje!",
    });
  },
};
