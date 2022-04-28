const mongoose = require("mongoose");
const PageSchema = mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Page = (module.exports = mongoose.model("Page", PageSchema));
