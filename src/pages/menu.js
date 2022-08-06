import menuItems from "./menuItems";
import '../css/menu.css';


/**
 * Adds content to and returns menu
 * @returns Site menu page
 */
function loadMenu() {
    return menu();
}

/**
 * Renders content and returns menu
 * @returns menu div
 */
function menu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("page-title")
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    menuItems.forEach(menuType => {
        menu.appendChild(submenu(menuType));
    });
    return menu;
}

/**
 * Renders the content for the submenu including the title and items
 * @param {*} menu The submenu to be rendered
 * @returns The submenu content
 */
function submenu(menu) {
    const subMenu = document.createElement("div");
    subMenu.classList.add("submenu");
    const submenuTitle = document.createElement("h2");
    submenuTitle.classList.add("submenu-title");
    submenuTitle.textContent = menu.type;
    subMenu.appendChild(submenuTitle);
    subMenu.appendChild(submenuItems(menu.items));
    return subMenu;
}

/**
 * Renders the list of items and prices for the sub menu 
 * @param {*} items The list of items and prices to be rendered
 * @returns The items content
 */
function submenuItems(items){
    const submenuItems = document.createElement("ul");
    submenuItems.classList.add("submenu-items");

    items.forEach(item => {
        const itemRow = document.createElement('li');
        itemRow.classList.add("item-row");

        const itemName = document.createElement('p');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;
        itemRow.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;
        itemRow.appendChild(itemPrice);
        submenuItems.append(itemRow);
    });
    return submenuItems;
}




export default loadMenu;