module.exports = {
  homepage: function (request, response, next) {
    const data = {
      pageTitle: "Witamy w IT SPA!",
      title: "IT SPA",
    };
    response.render("home", data);
  },
};

/*
  

    module.exports = {
  homepage: function (request, response, next) {
    response.render("home", request.context);
  },
};
*/
