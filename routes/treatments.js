module.exports = {
  homepage: function (request, response) {
    const data = {
      pageTitle: "Zobacz zabiegi w IT SPA!",
      title: "IT SPA"
    };
    response.render("treatments", data);
  },
};