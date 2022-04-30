module.exports = {
  homepage: function (request, response, next) {
    const data = {
      pageTitle: "Witamy w IT SPA!",
      title: "IT SPA",
    };
    response.render("home", data);
  },
};