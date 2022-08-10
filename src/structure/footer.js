/**
 * Adds content to and returns site footer
 * @returns Site footer
 */
function loadFooter() {    
    const footer = document.createElement("footer");
    footer.classList.add("footer");  
    return footer;
}

export default loadFooter;