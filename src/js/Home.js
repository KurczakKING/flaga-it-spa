/*export function Home() {
    const section = document.createElement('section');
    //const img = document.createElement('img');
    //img.src = require('../assets/support.png');
    //img.style.width = '50vw';

    section.innerHTML = `
        <h2>Home</h2>
        <p>Witaj w IT SPA. Każdy programista lubi u nas odpoczywać.</p>
    `;

    //section.append(img);

    return section;
}
*/

document.getElementById("demo").innerHTML = `
    <h2>ffffffffffffffffffff</h2>
    <p>ddddddddddddddddddddddddddddddddddddddddddd.</p>
`;

const main = document.querySelector("main");
const ggg = document.createElement("h3");
ggg.innerHTML = `
    gggggggggggggggggggggggggggggggggg
`;
main.append(ggg);

const data = fetch("./views/database.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.rooms[0]);
  });

main.append(data);

/*
const data = require("./views/database.json");
const rooms = data.rooms[0];
document.getElementById("data").innerHTML = `
    <p>${rooms}</p>
`;
*/
