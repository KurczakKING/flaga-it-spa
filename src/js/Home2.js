export function Home2() {
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