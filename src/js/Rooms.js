const main = document.querySelector("main");
const section = document.createElement("section");
section.innerHTML = `
        <h2>Rooms List</h2>
        <header>Loading...</header>
    `;

    /*
fetch("http://localhost:9000/rooms")
  .then((response) => response.json())
  .then((rooms) => {
    const ul = document.createElement("ul");
    const lis = rooms.map((room) => RoomsListItem(room));
    // const lis = rooms.map(RoomsListItem);

    ul.append(...lis);
    section.querySelector("header").remove();
    section.append(ul);
  });*/

main.append(section);
