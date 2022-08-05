import './css/normalize.css';
import './css/style.css';

import loadHeader from './structure/header';
import loadFooter from './structure/footer';
import {loadMain} from './structure/main';

import loadHome from './pages/home';

/**
 * Initializes the website header, main, and footer. 
 * Loads home page content;
 */
function initializeWebsite(){
    const body = document.body;
    body.appendChild(loadHeader());

    const main = loadMain();
    main.appendChild(loadHome());

    body.appendChild(main);
    body.appendChild(loadFooter());
}

initializeWebsite();