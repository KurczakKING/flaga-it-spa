const main = document.querySelector("main");
const section = document.createElement("section");
section.innerHTML = `
        <h2>Treatments</h2>
        <header>Loading...</header>
    `;

/*
fetch("http://localhost:9000/rooms")
  .then((response) => response.json())
  .then((treatments) => {
    const articles = treatments.map(treatment => TreatmentsListItem(treatment));
    section.querySelector("header").remove();
    section.append(ul);
  });*/

main.append(section);
