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
    nav.appendChild(navList());
    nav.appendChild(hamburger());
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
        navBtn.addEventListener("click", closeMobileMenu)
        listItem.appendChild(navBtn);
        list.appendChild(listItem);
    });
    return list;
}

/**
 * Creates and returns the hamburger icon for responsive nav menu
 * @returns Hamburger icon that opens and closes mobile menu
 */
function hamburger() {
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        hamburger.appendChild(bar);
    }

    hamburger.addEventListener("click", toggleMobileMenu);

    return hamburger;
}

/**
 * Opens and closes mobile menu when clicked
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-list');

    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
}

function closeMobileMenu(){
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-list');

    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
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