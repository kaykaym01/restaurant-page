/**
 * Adds content to and returns site footer
 * @returns Site footer
 */
function loadFooter() {    
 
    return footer();
}

function footer(){
    const footer = document.createElement("footer");
    footer.classList.add("footer"); 
    const copyrightMessage = document.createElement("p");
    copyrightMessage.textContent = "Rooted. 2022. All Rights Reserved";
    footer.appendChild(copyrightMessage);
    copyrightMessage.style.textAlign = "center";
    return footer;
}

export default loadFooter;