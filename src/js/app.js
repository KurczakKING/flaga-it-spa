//import 'bootstrap/dist/css/bootstrap.css';
//import './it-spa.scss';
import { Home2 } from './Home2';
//import { RoomsList } from './views/RoomsList';
//import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

// wstawiamy nawigacje poza elementem `main`
//main.before(Nav());

// na start pokazujemy komponent `Home`
main.append(Home2());

/*
document.body.addEventListener('navigate', (event) => {
    const { detail: Component } = event;
    // czyscimy zawartosc elementu main
    main.innerHTML = '';
    // wstawiamy nowy komponent do elementu main
    main.append(Component());
});
*/