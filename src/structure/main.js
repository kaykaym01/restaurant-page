/**
 * Adds content to and returns main
 * @returns Site main
 */
function loadMain() {    
    const main = document.createElement("main");
    main.classList.add("main");  
    console.log("main loaded");
    return main;
}

export default loadMain;