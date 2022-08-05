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

/**
 * Adds content as child of main
 * @param {*} content Content to add to main
 */
function addToMain(content){
    const main = document.querySelector("main");
    main.appendChild(content);
    console.log("content added to main");
}

export {loadMain, clearMain, addToMain};