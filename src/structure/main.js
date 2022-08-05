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

/**
 * Clears all content from main section
 */
function clearMain(){
    const main = document.querySelector("main");
    while (main.firstChild){
        main.removeChild(main.firstChild);
    }
    console.log("main cleared");
}
export {loadMain, clearMain};