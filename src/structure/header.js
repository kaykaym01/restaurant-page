import loadContact from "../pages/contact";
import loadOurStory from "../pages/ourStory";
import loadMenu from "../pages/menu";
import loadHome from "../pages/home";
import { addToMain, clearMain } from "./main";

/**
 * Adds nav logo and nav bar to and returns header
 * @returns Site header
 */
function loadHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.appendChild(navbar());
    console.log("header loaded");
    return header;
}

/**
 * Loads nav logo button and nav list into navbar and returns navbar
 * @returns Site navbar
 */
function navbar() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.appendChild(navLogo());
    nav.appendChild(navList())
    console.log("nav loaded");
    return nav;
}

/**
 * Gets a list of the navigation tabs, their ids, and click events
 * @returns List of navigation tabs
 */
function getNavTabs() {
    const navTabs = [
        {
            name: "Menu",
            id: "#menu-btn",
            clickEvent: loadMenu,
        },
        {
            name: "Our Story",
            id: "#our-story-btn",
            clickEvent: loadOurStory,
        },
        {
            name: "Contact",
            id: "#contact-btn",
            clickEvent: loadContact,
        },
    ];
    return navTabs;
}

/**
 * Loads nav links into a list and returns list
 * @returns Navbar list
 */
function navList() {
    const list = document.createElement("ul");
    list.classList.add("nav-list")
    const navTabs = getNavTabs();
    navTabs.forEach(tab => {
        const listItem = document.createElement("li");
        listItem.classList.add("nav-list-item");
        const navBtn = document.createElement("button");
        navBtn.classList.add("nav-btn");
        navBtn.setAttribute("id", tab.id);
        navBtn.textContent = tab.name;
        addNavBtnClickEvent(navBtn, tab.clickEvent);
        listItem.appendChild(navBtn);
        list.appendChild(listItem);
    });
    return list;
}

/**
 * Loads nav logo into a button and returns button
 * @returns Nav logo button
 */
function navLogo() {
    const logoBtn = document.createElement("button");
    logoBtn.classList.add("nav-btn", "nav-brand");
    logoBtn.textContent = "Rooted";
    addNavBtnClickEvent(logoBtn, loadHome);
    return logoBtn;
}

/**
 * Adds a click event that checks if the selected 
 * button's tab is active and if not, removes the ac
 * @param {*} navBtn 
 * @param {*} loadPage 
 */
function addNavBtnClickEvent(navBtn, loadPage) {
    navBtn.addEventListener('click', (e) => {
        loadPageIfNotActive(e, loadPage);
    });
}

/**
 * On click event, checks if event target is "active", and if not
 * removes active class from all other nav buttons, adds
 * active class to event target, and renders loadPage in main
 * @param {*} event The click event
 * @param {*} loadPage The load page to be added to main
 */
function loadPageIfNotActive(event, loadPage) {
    if (!event.target.classList.contains("active")) {
        removeActiveClassFromNavBtns();
        event.target.classList.add("active");
        clearMain();
        addToMain(loadPage());
    }
}

/**
 * Helper function to remove the active class from all other nav buttons
 */
function removeActiveClassFromNavBtns() {
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(navBtn => {
        navBtn.classList.remove("active");
    })
}

export default loadHeader;