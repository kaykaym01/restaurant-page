/**
 * Adds nav logo and nav bar to and returns header
 * @returns Site header
 */
function loadHeader() {    
    const header = document.createElement("header");
    header.classList.add("header");  
    console.log("header loaded");
    return header;
}

export default loadHeader;