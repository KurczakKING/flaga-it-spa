module.exports = {
  homepage: function (request, response) {
    response.render("treatments", {
      pageTitle: "Zobacz zabiegi!",
    });
  },
};
