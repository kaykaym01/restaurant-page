import '../css/home.css';

/**
 * Adds content to and returns home
 * @returns Site home page
 */
function loadHome() {
    return home();
}

function home(){
    const home = document.createElement("div");
    home.classList.add("home");
    home.appendChild(topContent());
    return home;
}

function topContent(){
    const topContent = document.createElement("div");
    topContent.classList.add("top-content");

    const headline = document.createElement("h2");
    headline.classList.add("headline");
    headline.textContent = "southern cuisine with roots in gullah geechee tradition";
    topContent.appendChild(headline);

    return topContent;
}

export default loadHome;