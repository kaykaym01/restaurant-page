/**
 * Adds content to and returns home
 * @returns Site home page
 */
function loadHome() {  
    const home = document.createElement("div");
    home.classList.add("home");  
    console.log("home loaded");
    return home;
}

export default loadHome;