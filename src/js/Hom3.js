const Hom3 = () => {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.innerHTML = `
    <h2>Home</h2>
    <p>Witaj w IT SPA. Każdy programista lubi u nas odpoczywać.</p>
`;
  main.append(section);

  return section;
}

module.export = Hom3;