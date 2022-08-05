/**
 * Adds content to and returns site footer
 * @returns Site footer
 */
function loadFooter() {    
    const footer = document.createElement("footer");
    footer.classList.add("footer");  
    console.log("footer loaded");
    return footer;
}

export default loadFooter;