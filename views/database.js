"use strict";

fetch("./database.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.rooms.name);
  });
