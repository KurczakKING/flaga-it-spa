//const Home = () => {
const main = document.querySelector("main");

const section = document.createElement("section");
section.innerHTML = `
    <h2>Home</h2>
    <p>Witaj w IT SPA. Każdy programista lubi u nas odpoczywać.</p>
`;
main.append(section);

// return section;
//}

//module.exports = Home;

/*
const data = fetch("./views/database.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.rooms[0]);
  });

main.append(data);
*/

/*
const data = require("./views/database.json");
const rooms = data.rooms[0];
document.getElementById("data").innerHTML = `
    <p>${rooms}</p>
`;
*/
