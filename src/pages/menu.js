/**
 * Adds content to and returns menu
 * @returns Site menu page
 */
function loadMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu"); 
    console.log("menu loaded");
    return menu;
}

export default loadMenu;